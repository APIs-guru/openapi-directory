import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Agent } from "./googleclouddialogflowcxv3beta1agent";
/**
 * The response message for Agents.ListAgents.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListAgentsResponse extends SpeakeasyBase {
    agents?: GoogleCloudDialogflowCxV3beta1Agent[];
    nextPageToken?: string;
}
