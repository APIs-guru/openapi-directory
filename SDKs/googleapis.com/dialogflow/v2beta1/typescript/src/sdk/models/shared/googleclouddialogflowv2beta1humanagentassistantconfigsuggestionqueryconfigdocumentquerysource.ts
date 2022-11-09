import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource
/** 
 * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents?: string[];
}
