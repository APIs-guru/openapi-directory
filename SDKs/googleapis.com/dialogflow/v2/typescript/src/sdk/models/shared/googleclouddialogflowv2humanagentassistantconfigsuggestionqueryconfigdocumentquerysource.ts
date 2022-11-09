import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource
/** 
 * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents?: string[];
}
