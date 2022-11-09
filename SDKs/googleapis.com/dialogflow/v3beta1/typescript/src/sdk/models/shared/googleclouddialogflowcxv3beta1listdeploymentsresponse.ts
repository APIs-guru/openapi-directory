import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Deployment } from "./googleclouddialogflowcxv3beta1deployment";


// GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse
/** 
 * The response message for Deployments.ListDeployments.
**/
export class GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.GoogleCloudDialogflowCxV3beta1Deployment })
  deployments?: GoogleCloudDialogflowCxV3beta1Deployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
