import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";
/**
 * The response message for Flows.ListFlows.
**/
export declare class GoogleCloudDialogflowCxV3ListFlowsResponse extends SpeakeasyBase {
    flows?: GoogleCloudDialogflowCxV3Flow[];
    nextPageToken?: string;
}
