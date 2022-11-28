import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Flow } from "./googleclouddialogflowcxv3beta1flow";
/**
 * The response message for Flows.ListFlows.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListFlowsResponse extends SpeakeasyBase {
    flows?: GoogleCloudDialogflowCxV3beta1Flow[];
    nextPageToken?: string;
}
