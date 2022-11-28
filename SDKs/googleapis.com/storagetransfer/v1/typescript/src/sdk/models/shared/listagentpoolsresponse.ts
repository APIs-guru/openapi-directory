import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentPool } from "./agentpool";



// ListAgentPoolsResponse
/** 
 * Response from ListAgentPools.
**/
export class ListAgentPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentPools", elemType: AgentPool })
  agentPools?: AgentPool[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
