import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Agent } from "./googleclouddialogflowv2beta1agent";



// GoogleCloudDialogflowV2beta1SearchAgentsResponse
/** 
 * The response message for Agents.SearchAgents.
**/
export class GoogleCloudDialogflowV2beta1SearchAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agents", elemType: GoogleCloudDialogflowV2beta1Agent })
  agents?: GoogleCloudDialogflowV2beta1Agent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
