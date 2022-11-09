import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PermissionCustomRolesSupportLevelEnum {
    Supported = "SUPPORTED",
    Testing = "TESTING",
    NotSupported = "NOT_SUPPORTED"
}
export declare enum PermissionStageEnum {
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * A permission which can be included by a role.
**/
export declare class Permission extends SpeakeasyBase {
    apiDisabled?: boolean;
    customRolesSupportLevel?: PermissionCustomRolesSupportLevelEnum;
    description?: string;
    name?: string;
    onlyInPredefinedRoles?: boolean;
    primaryPermission?: string;
    stage?: PermissionStageEnum;
    title?: string;
}
