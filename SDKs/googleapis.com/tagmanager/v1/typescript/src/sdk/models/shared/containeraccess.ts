import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContainerAccessPermissionEnum {
    Read = "read"
,    Edit = "edit"
,    Publish = "publish"
,    Delete = "delete"
,    Manage = "manage"
,    EditWorkspace = "editWorkspace"
}


// ContainerAccess
/** 
 * Defines the Google Tag Manager Container access permissions.
**/
export class ContainerAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: ContainerAccessPermissionEnum[];
}
