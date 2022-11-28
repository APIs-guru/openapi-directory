import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource
/** 
 * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];
}
