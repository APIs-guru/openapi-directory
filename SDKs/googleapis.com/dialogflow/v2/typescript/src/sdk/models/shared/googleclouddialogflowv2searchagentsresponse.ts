import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Agent } from "./googleclouddialogflowv2agent";


// GoogleCloudDialogflowV2SearchAgentsResponse
/** 
 * The response message for Agents.SearchAgents.
**/
export class GoogleCloudDialogflowV2SearchAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agents", elemType: shared.GoogleCloudDialogflowV2Agent })
  agents?: GoogleCloudDialogflowV2Agent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
