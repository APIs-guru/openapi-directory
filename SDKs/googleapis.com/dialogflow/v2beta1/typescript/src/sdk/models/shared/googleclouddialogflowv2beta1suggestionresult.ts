import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2beta1SuggestArticlesResponse } from "./googleclouddialogflowv2beta1suggestarticlesresponse";
import { GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse } from "./googleclouddialogflowv2beta1suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse } from "./googleclouddialogflowv2beta1suggestsmartrepliesresponse";


// GoogleCloudDialogflowV2beta1SuggestionResult
/** 
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export class GoogleCloudDialogflowV2beta1SuggestionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @Metadata({ data: "json, name=suggestArticlesResponse" })
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;

  @Metadata({ data: "json, name=suggestFaqAnswersResponse" })
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;

  @Metadata({ data: "json, name=suggestSmartRepliesResponse" })
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
}
