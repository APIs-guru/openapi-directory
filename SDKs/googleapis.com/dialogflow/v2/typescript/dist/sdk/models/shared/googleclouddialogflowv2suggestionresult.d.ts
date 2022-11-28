import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2SuggestArticlesResponse } from "./googleclouddialogflowv2suggestarticlesresponse";
import { GoogleCloudDialogflowV2SuggestFaqAnswersResponse } from "./googleclouddialogflowv2suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2SuggestSmartRepliesResponse } from "./googleclouddialogflowv2suggestsmartrepliesresponse";
/**
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export declare class GoogleCloudDialogflowV2SuggestionResult extends SpeakeasyBase {
    error?: GoogleRpcStatus;
    suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;
    suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
    suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
}
