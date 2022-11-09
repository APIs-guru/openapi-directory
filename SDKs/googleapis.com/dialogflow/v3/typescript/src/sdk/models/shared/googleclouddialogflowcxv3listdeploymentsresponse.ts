import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Deployment } from "./googleclouddialogflowcxv3deployment";


// GoogleCloudDialogflowCxV3ListDeploymentsResponse
/** 
 * The response message for Deployments.ListDeployments.
**/
export class GoogleCloudDialogflowCxV3ListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.GoogleCloudDialogflowCxV3Deployment })
  deployments?: GoogleCloudDialogflowCxV3Deployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
