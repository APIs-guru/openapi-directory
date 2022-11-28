import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationLoggingOptions } from "./authorizationloggingoptions";
export declare enum CloudAuditOptionsLogNameEnum {
    UnspecifiedLogName = "UNSPECIFIED_LOG_NAME",
    AdminActivity = "ADMIN_ACTIVITY",
    DataAccess = "DATA_ACCESS"
}
/**
 * Write a Cloud Audit log
**/
export declare class CloudAuditOptions extends SpeakeasyBase {
    authorizationLoggingOptions?: AuthorizationLoggingOptions;
    logName?: CloudAuditOptionsLogNameEnum;
}
