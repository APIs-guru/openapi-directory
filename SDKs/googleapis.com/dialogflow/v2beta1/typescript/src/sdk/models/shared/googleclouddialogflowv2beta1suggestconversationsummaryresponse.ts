import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary } from "./googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary";



// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse
/** 
 * The response message for Conversations.SuggestConversationSummary.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary;
}
