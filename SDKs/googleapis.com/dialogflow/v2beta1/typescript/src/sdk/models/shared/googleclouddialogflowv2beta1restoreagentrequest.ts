import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1RestoreAgentRequest
/** 
 * The request message for Agents.RestoreAgent.
**/
export class GoogleCloudDialogflowV2beta1RestoreAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @SpeakeasyMetadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
