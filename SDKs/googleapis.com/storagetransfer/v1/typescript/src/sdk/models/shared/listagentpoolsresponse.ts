import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentPool } from "./agentpool";


// ListAgentPoolsResponse
/** 
 * Response from ListAgentPools.
**/
export class ListAgentPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentPools", elemType: shared.AgentPool })
  agentPools?: AgentPool[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
