import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary
/** 
 * Generated summary for a conversation.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=textSections" })
  textSections?: Map<string, string>;
}
