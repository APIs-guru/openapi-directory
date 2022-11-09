import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary } from "./googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary";


// GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse
/** 
 * The response message for Conversations.SuggestConversationSummary.
**/
export class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary;
}
