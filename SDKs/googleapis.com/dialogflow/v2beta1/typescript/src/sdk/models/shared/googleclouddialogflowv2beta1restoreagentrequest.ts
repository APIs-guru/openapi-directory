import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1RestoreAgentRequest
/** 
 * The request message for Agents.RestoreAgent.
**/
export class GoogleCloudDialogflowV2beta1RestoreAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @Metadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
