import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest
/** 
 * The request message for Conversations.SuggestConversationSummary.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
