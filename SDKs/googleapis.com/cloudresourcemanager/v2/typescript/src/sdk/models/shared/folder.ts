import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FolderLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    DeleteRequested = "DELETE_REQUESTED"
}


// Folder
/** 
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: FolderLifecycleStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
