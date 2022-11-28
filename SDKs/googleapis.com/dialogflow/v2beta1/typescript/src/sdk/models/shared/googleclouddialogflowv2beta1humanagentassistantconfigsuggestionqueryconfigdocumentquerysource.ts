import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource
/** 
 * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];
}
