import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings
/** 
 * Settings that determine how to filter recent conversation context when generating suggestions.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dropHandoffMessages" })
  dropHandoffMessages?: boolean;

  @Metadata({ data: "json, name=dropIvrMessages" })
  dropIvrMessages?: boolean;

  @Metadata({ data: "json, name=dropVirtualAgentMessages" })
  dropVirtualAgentMessages?: boolean;
}
