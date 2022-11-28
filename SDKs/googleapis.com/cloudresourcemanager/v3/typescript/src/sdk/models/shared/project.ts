import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}


// Project
/** 
 * A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ProjectStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ProjectInput
/** 
 * A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources.
**/
export class ProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
