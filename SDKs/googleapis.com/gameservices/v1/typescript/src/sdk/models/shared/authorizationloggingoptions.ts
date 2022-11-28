import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorizationLoggingOptionsPermissionTypeEnum {
    PermissionTypeUnspecified = "PERMISSION_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    AdminWrite = "ADMIN_WRITE",
    DataRead = "DATA_READ",
    DataWrite = "DATA_WRITE"
}


// AuthorizationLoggingOptions
/** 
 * Authorization-related information used by Cloud Audit Logging.
**/
export class AuthorizationLoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissionType" })
  permissionType?: AuthorizationLoggingOptionsPermissionTypeEnum;
}
