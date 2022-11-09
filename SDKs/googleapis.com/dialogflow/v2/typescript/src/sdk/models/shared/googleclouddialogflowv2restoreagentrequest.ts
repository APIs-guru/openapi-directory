import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2RestoreAgentRequest
/** 
 * The request message for Agents.RestoreAgent.
**/
export class GoogleCloudDialogflowV2RestoreAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentContent" })
  agentContent?: string;

  @Metadata({ data: "json, name=agentUri" })
  agentUri?: string;
}
