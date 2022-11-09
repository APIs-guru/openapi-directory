import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings
/** 
 * Settings of suggestion trigger.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=noSmalltalk" })
  noSmalltalk?: boolean;

  @Metadata({ data: "json, name=onlyEndUser" })
  onlyEndUser?: boolean;
}
