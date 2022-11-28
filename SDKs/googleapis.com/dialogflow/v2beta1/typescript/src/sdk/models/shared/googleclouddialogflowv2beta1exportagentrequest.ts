import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1ExportAgentRequest
/** 
 * The request message for Agents.ExportAgent.
**/
export class GoogleCloudDialogflowV2beta1ExportAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
