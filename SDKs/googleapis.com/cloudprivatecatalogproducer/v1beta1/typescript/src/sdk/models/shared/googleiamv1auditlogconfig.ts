import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleIamV1AuditLogConfigLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    DataWrite = "DATA_WRITE",
    DataRead = "DATA_READ"
}


// GoogleIamV1AuditLogConfig
/** 
 * Provides the configuration for logging a type of permissions.
 * Example:
 * 
 *     {
 *       "audit_log_configs": [
 *         {
 *           "log_type": "DATA_READ",
 *           "exempted_members": [
 *             "user:jose@example.com"
 *           ]
 *         },
 *         {
 *           "log_type": "DATA_WRITE",
 *         }
 *       ]
 *     }
 * 
 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
 * jose@example.com from DATA_READ logging.
**/
export class GoogleIamV1AuditLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exemptedMembers" })
  exemptedMembers?: string[];

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: GoogleIamV1AuditLogConfigLogTypeEnum;
}
