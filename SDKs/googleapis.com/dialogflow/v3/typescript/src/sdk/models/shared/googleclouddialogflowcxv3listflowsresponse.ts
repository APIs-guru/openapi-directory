import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";



// GoogleCloudDialogflowCxV3ListFlowsResponse
/** 
 * The response message for Flows.ListFlows.
**/
export class GoogleCloudDialogflowCxV3ListFlowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flows", elemType: GoogleCloudDialogflowCxV3Flow })
  flows?: GoogleCloudDialogflowCxV3Flow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
