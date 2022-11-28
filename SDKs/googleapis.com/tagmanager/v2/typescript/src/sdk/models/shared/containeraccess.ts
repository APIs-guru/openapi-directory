import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContainerAccessPermissionEnum {
    ContainerPermissionUnspecified = "containerPermissionUnspecified",
    NoAccess = "noAccess",
    Read = "read",
    Edit = "edit",
    Approve = "approve",
    Publish = "publish"
}


// ContainerAccess
/** 
 * Defines the Google Tag Manager Container access permissions.
**/
export class ContainerAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: ContainerAccessPermissionEnum;
}
