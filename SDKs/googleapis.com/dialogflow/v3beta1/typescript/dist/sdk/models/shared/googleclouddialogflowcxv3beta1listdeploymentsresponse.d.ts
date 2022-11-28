import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Deployment } from "./googleclouddialogflowcxv3beta1deployment";
/**
 * The response message for Deployments.ListDeployments.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse extends SpeakeasyBase {
    deployments?: GoogleCloudDialogflowCxV3beta1Deployment[];
    nextPageToken?: string;
}
