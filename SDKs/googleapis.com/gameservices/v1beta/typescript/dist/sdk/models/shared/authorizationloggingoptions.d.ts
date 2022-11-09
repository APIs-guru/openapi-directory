import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AuthorizationLoggingOptionsPermissionTypeEnum {
    PermissionTypeUnspecified = "PERMISSION_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    AdminWrite = "ADMIN_WRITE",
    DataRead = "DATA_READ",
    DataWrite = "DATA_WRITE"
}
/**
 * Authorization-related information used by Cloud Audit Logging.
**/
export declare class AuthorizationLoggingOptions extends SpeakeasyBase {
    permissionType?: AuthorizationLoggingOptionsPermissionTypeEnum;
}
