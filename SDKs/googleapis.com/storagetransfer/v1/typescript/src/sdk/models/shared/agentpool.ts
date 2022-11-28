import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandwidthLimit } from "./bandwidthlimit";


export enum AgentPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Deleting = "DELETING"
}


// AgentPool
/** 
 * Represents an On-Premises Agent pool.
**/
export class AgentPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimit" })
  bandwidthLimit?: BandwidthLimit;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AgentPoolStateEnum;
}


// AgentPoolInput
/** 
 * Represents an On-Premises Agent pool.
**/
export class AgentPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimit" })
  bandwidthLimit?: BandwidthLimit;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
