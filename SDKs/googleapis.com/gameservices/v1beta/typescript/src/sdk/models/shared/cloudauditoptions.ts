import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationLoggingOptions } from "./authorizationloggingoptions";


export enum CloudAuditOptionsLogNameEnum {
    UnspecifiedLogName = "UNSPECIFIED_LOG_NAME",
    AdminActivity = "ADMIN_ACTIVITY",
    DataAccess = "DATA_ACCESS"
}


// CloudAuditOptions
/** 
 * Write a Cloud Audit log
**/
export class CloudAuditOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationLoggingOptions" })
  authorizationLoggingOptions?: AuthorizationLoggingOptions;

  @SpeakeasyMetadata({ data: "json, name=logName" })
  logName?: CloudAuditOptionsLogNameEnum;
}
