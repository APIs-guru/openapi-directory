import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Agent } from "./googleclouddialogflowv2agent";
/**
 * The response message for Agents.SearchAgents.
**/
export declare class GoogleCloudDialogflowV2SearchAgentsResponse extends SpeakeasyBase {
    agents?: GoogleCloudDialogflowV2Agent[];
    nextPageToken?: string;
}
