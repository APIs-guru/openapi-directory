import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Deployment } from "./googleclouddialogflowcxv3beta1deployment";



// GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse
/** 
 * The response message for Deployments.ListDeployments.
**/
export class GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: GoogleCloudDialogflowCxV3beta1Deployment })
  deployments?: GoogleCloudDialogflowCxV3beta1Deployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
