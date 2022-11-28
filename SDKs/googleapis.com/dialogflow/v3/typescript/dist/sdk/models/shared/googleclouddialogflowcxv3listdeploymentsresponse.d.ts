import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Deployment } from "./googleclouddialogflowcxv3deployment";
/**
 * The response message for Deployments.ListDeployments.
**/
export declare class GoogleCloudDialogflowCxV3ListDeploymentsResponse extends SpeakeasyBase {
    deployments?: GoogleCloudDialogflowCxV3Deployment[];
    nextPageToken?: string;
}
