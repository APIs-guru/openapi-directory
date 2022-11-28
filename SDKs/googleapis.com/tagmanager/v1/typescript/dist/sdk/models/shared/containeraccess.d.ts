import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContainerAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}
/**
 * Defines the Google Tag Manager Container access permissions.
**/
export declare class ContainerAccess extends SpeakeasyBase {
    containerId?: string;
    permission?: ContainerAccessPermissionEnum[];
}
