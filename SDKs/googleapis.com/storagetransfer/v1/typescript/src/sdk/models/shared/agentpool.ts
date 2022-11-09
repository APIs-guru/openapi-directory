import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandwidthLimit } from "./bandwidthlimit";

export enum AgentPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Deleting = "DELETING"
}


// AgentPool
/** 
 * Represents an On-Premises Agent pool.
**/
export class AgentPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimit" })
  bandwidthLimit?: BandwidthLimit;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: AgentPoolStateEnum;
}
