import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings
/** 
 * Settings of suggestion trigger.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noSmallTalk" })
  noSmallTalk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlyEndUser" })
  onlyEndUser?: boolean;
}
