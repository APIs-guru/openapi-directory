import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Agent } from "./googleclouddialogflowv2beta1agent";
/**
 * The response message for Agents.SearchAgents.
**/
export declare class GoogleCloudDialogflowV2beta1SearchAgentsResponse extends SpeakeasyBase {
    agents?: GoogleCloudDialogflowV2beta1Agent[];
    nextPageToken?: string;
}
