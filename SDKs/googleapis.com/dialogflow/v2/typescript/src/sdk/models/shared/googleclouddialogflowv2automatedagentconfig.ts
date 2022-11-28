import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2AutomatedAgentConfig
/** 
 * Defines the Automated Agent to connect to a conversation.
**/
export class GoogleCloudDialogflowV2AutomatedAgentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;
}
