import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// HubInput
/** 
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
**/
export class HubInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// Hub
/** 
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
**/
export class Hub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spokes" })
  spokes?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: HubStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
