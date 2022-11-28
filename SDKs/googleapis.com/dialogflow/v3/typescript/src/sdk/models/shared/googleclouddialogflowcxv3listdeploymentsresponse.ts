import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Deployment } from "./googleclouddialogflowcxv3deployment";



// GoogleCloudDialogflowCxV3ListDeploymentsResponse
/** 
 * The response message for Deployments.ListDeployments.
**/
export class GoogleCloudDialogflowCxV3ListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: GoogleCloudDialogflowCxV3Deployment })
  deployments?: GoogleCloudDialogflowCxV3Deployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
