import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2AutomatedAgentConfig
/** 
 * Defines the Automated Agent to connect to a conversation.
**/
export class GoogleCloudDialogflowV2AutomatedAgentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: string;
}
