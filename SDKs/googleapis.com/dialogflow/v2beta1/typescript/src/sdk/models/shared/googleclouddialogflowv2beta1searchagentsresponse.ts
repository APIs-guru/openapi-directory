import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Agent } from "./googleclouddialogflowv2beta1agent";


// GoogleCloudDialogflowV2beta1SearchAgentsResponse
/** 
 * The response message for Agents.SearchAgents.
**/
export class GoogleCloudDialogflowV2beta1SearchAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agents", elemType: shared.GoogleCloudDialogflowV2beta1Agent })
  agents?: GoogleCloudDialogflowV2beta1Agent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
