import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Agent } from "./googleclouddialogflowv2agent";



// GoogleCloudDialogflowV2SearchAgentsResponse
/** 
 * The response message for Agents.SearchAgents.
**/
export class GoogleCloudDialogflowV2SearchAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agents", elemType: GoogleCloudDialogflowV2Agent })
  agents?: GoogleCloudDialogflowV2Agent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
