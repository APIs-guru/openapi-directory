import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Agent } from "./googleclouddialogflowcxv3agent";
/**
 * The response message for Agents.ListAgents.
**/
export declare class GoogleCloudDialogflowCxV3ListAgentsResponse extends SpeakeasyBase {
    agents?: GoogleCloudDialogflowCxV3Agent[];
    nextPageToken?: string;
}
