import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Agent } from "./googleclouddialogflowcxv3beta1agent";



// GoogleCloudDialogflowCxV3beta1ListAgentsResponse
/** 
 * The response message for Agents.ListAgents.
**/
export class GoogleCloudDialogflowCxV3beta1ListAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agents", elemType: GoogleCloudDialogflowCxV3beta1Agent })
  agents?: GoogleCloudDialogflowCxV3beta1Agent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
