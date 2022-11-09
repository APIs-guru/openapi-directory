import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings
/** 
 * Settings of suggestion trigger.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=noSmallTalk" })
  noSmallTalk?: boolean;

  @Metadata({ data: "json, name=onlyEndUser" })
  onlyEndUser?: boolean;
}
