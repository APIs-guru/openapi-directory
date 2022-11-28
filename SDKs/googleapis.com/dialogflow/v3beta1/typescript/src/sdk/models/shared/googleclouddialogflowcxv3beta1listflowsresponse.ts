import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Flow } from "./googleclouddialogflowcxv3beta1flow";



// GoogleCloudDialogflowCxV3beta1ListFlowsResponse
/** 
 * The response message for Flows.ListFlows.
**/
export class GoogleCloudDialogflowCxV3beta1ListFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flows", elemType: GoogleCloudDialogflowCxV3beta1Flow })
  flows?: GoogleCloudDialogflowCxV3beta1Flow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
