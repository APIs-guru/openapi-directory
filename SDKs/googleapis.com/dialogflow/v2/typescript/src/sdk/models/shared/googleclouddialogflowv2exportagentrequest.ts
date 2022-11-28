import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ExportAgentRequest
/** 
 * The request message for Agents.ExportAgent.
**/
export class GoogleCloudDialogflowV2ExportAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
