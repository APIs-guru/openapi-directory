import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ImportAgentRequest
/** 
 * The request message for Agents.ImportAgent.
**/
export class GoogleCloudDialogflowV2ImportAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @SpeakeasyMetadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
