import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2SuggestArticlesResponse } from "./googleclouddialogflowv2suggestarticlesresponse";
import { GoogleCloudDialogflowV2SuggestFaqAnswersResponse } from "./googleclouddialogflowv2suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2SuggestSmartRepliesResponse } from "./googleclouddialogflowv2suggestsmartrepliesresponse";


// GoogleCloudDialogflowV2SuggestionResult
/** 
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export class GoogleCloudDialogflowV2SuggestionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=suggestArticlesResponse" })
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;

  @Metadata({ data: "json, name=suggestFaqAnswersResponse" })
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

  @Metadata({ data: "json, name=suggestSmartRepliesResponse" })
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
}
