import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FolderStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    DeleteRequested = "DELETE_REQUESTED"
}


// Folder
/** 
 * A folder in an organization's resource hierarchy, used to organize that organization's resources.
**/
export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=state" })
  state?: FolderStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
