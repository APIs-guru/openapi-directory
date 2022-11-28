import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContainerAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}


// ContainerAccess
/** 
 * Defines the Google Tag Manager Container access permissions.
**/
export class ContainerAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: ContainerAccessPermissionEnum[];
}
