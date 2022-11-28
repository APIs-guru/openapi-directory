import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GlobalPermissionPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED",
    CreateCourse = "CREATE_COURSE"
}
/**
 * Global user permission description.
**/
export declare class GlobalPermission extends SpeakeasyBase {
    permission?: GlobalPermissionPermissionEnum;
}
