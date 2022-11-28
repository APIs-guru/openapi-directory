import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Agent } from "./googleclouddialogflowcxv3agent";



// GoogleCloudDialogflowCxV3ListAgentsResponse
/** 
 * The response message for Agents.ListAgents.
**/
export class GoogleCloudDialogflowCxV3ListAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agents", elemType: GoogleCloudDialogflowCxV3Agent })
  agents?: GoogleCloudDialogflowCxV3Agent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
