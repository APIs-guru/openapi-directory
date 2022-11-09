import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// Hub
/** 
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
**/
export class Hub extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=spokes" })
  spokes?: string[];

  @Metadata({ data: "json, name=state" })
  state?: HubStateEnum;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
