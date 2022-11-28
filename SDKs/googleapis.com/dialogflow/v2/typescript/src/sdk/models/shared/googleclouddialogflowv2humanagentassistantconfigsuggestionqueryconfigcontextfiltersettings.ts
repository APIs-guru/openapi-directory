import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings
/** 
 * Settings that determine how to filter recent conversation context when generating suggestions.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dropHandoffMessages" })
  dropHandoffMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dropIvrMessages" })
  dropIvrMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dropVirtualAgentMessages" })
  dropVirtualAgentMessages?: boolean;
}
