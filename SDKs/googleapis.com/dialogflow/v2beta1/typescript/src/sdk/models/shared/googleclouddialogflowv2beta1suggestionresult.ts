import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2beta1SuggestArticlesResponse } from "./googleclouddialogflowv2beta1suggestarticlesresponse";
import { GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse } from "./googleclouddialogflowv2beta1suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse } from "./googleclouddialogflowv2beta1suggestsmartrepliesresponse";



// GoogleCloudDialogflowV2beta1SuggestionResult
/** 
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export class GoogleCloudDialogflowV2beta1SuggestionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=suggestArticlesResponse" })
  suggestArticlesResponse?: GoogleCloudDialogflowV2beta1SuggestArticlesResponse;

  @SpeakeasyMetadata({ data: "json, name=suggestFaqAnswersResponse" })
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;

  @SpeakeasyMetadata({ data: "json, name=suggestSmartRepliesResponse" })
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
}
