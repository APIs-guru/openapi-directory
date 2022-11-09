import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Agent } from "./googleclouddialogflowcxv3agent";


// GoogleCloudDialogflowCxV3ListAgentsResponse
/** 
 * The response message for Agents.ListAgents.
**/
export class GoogleCloudDialogflowCxV3ListAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agents", elemType: shared.GoogleCloudDialogflowCxV3Agent })
  agents?: GoogleCloudDialogflowCxV3Agent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
