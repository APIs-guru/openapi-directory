import { SpeakeasyBase } from "../../../internal/utils";
import { AgentPool } from "./agentpool";
/**
 * Response from ListAgentPools.
**/
export declare class ListAgentPoolsResponse extends SpeakeasyBase {
    agentPools?: AgentPool[];
    nextPageToken?: string;
}
