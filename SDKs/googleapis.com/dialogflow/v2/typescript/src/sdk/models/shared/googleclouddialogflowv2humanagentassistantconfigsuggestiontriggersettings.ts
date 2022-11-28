import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings
/** 
 * Settings of suggestion trigger.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noSmalltalk" })
  noSmalltalk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlyEndUser" })
  onlyEndUser?: boolean;
}
