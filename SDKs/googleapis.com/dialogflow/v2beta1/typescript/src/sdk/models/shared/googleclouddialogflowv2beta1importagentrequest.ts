import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1ImportAgentRequest
/** 
 * The request message for Agents.ImportAgent.
**/
export class GoogleCloudDialogflowV2beta1ImportAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @Metadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
