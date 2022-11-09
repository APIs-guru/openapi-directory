import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContainerAccessPermissionEnum {
    ContainerPermissionUnspecified = "containerPermissionUnspecified"
,    NoAccess = "noAccess"
,    Read = "read"
,    Edit = "edit"
,    Approve = "approve"
,    Publish = "publish"
}


// ContainerAccess
/** 
 * Defines the Google Tag Manager Container access permissions.
**/
export class ContainerAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: ContainerAccessPermissionEnum;
}
