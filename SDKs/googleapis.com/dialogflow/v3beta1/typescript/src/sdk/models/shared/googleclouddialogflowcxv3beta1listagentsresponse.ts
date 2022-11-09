import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Agent } from "./googleclouddialogflowcxv3beta1agent";


// GoogleCloudDialogflowCxV3beta1ListAgentsResponse
/** 
 * The response message for Agents.ListAgents.
**/
export class GoogleCloudDialogflowCxV3beta1ListAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agents", elemType: shared.GoogleCloudDialogflowCxV3beta1Agent })
  agents?: GoogleCloudDialogflowCxV3beta1Agent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
