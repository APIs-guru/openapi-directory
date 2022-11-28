import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContainerAccessPermissionEnum {
    ContainerPermissionUnspecified = "containerPermissionUnspecified",
    NoAccess = "noAccess",
    Read = "read",
    Edit = "edit",
    Approve = "approve",
    Publish = "publish"
}
/**
 * Defines the Google Tag Manager Container access permissions.
**/
export declare class ContainerAccess extends SpeakeasyBase {
    containerId?: string;
    permission?: ContainerAccessPermissionEnum;
}
