import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest
/** 
 * The request message for Conversations.SuggestConversationSummary.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
