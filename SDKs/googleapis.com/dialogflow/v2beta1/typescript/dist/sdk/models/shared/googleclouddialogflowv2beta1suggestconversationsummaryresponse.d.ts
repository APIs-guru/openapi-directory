import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary } from "./googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary";
/**
 * The response message for Conversations.SuggestConversationSummary.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse extends SpeakeasyBase {
    contextSize?: number;
    latestMessage?: string;
    summary?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary;
}
