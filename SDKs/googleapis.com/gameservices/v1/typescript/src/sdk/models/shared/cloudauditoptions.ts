import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationLoggingOptions } from "./authorizationloggingoptions";

export enum CloudAuditOptionsLogNameEnum {
    UnspecifiedLogName = "UNSPECIFIED_LOG_NAME"
,    AdminActivity = "ADMIN_ACTIVITY"
,    DataAccess = "DATA_ACCESS"
}


// CloudAuditOptions
/** 
 * Write a Cloud Audit log
**/
export class CloudAuditOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationLoggingOptions" })
  authorizationLoggingOptions?: AuthorizationLoggingOptions;

  @Metadata({ data: "json, name=logName" })
  logName?: CloudAuditOptionsLogNameEnum;
}
