import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary
/** 
 * Generated summary for a conversation.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=textSections" })
  textSections?: Map<string, string>;
}
