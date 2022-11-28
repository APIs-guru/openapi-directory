import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FolderLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}


// FolderInput
/** 
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
**/
export class FolderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}


// Folder
/** 
 * A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
**/
export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: FolderLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
