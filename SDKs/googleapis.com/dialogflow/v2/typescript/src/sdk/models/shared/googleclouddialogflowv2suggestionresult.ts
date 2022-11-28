import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2SuggestArticlesResponse } from "./googleclouddialogflowv2suggestarticlesresponse";
import { GoogleCloudDialogflowV2SuggestFaqAnswersResponse } from "./googleclouddialogflowv2suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2SuggestSmartRepliesResponse } from "./googleclouddialogflowv2suggestsmartrepliesresponse";



// GoogleCloudDialogflowV2SuggestionResult
/** 
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
export class GoogleCloudDialogflowV2SuggestionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GoogleRpcStatus;

  @SpeakeasyMetadata({ data: "json, name=suggestArticlesResponse" })
  suggestArticlesResponse?: GoogleCloudDialogflowV2SuggestArticlesResponse;

  @SpeakeasyMetadata({ data: "json, name=suggestFaqAnswersResponse" })
  suggestFaqAnswersResponse?: GoogleCloudDialogflowV2SuggestFaqAnswersResponse;

  @SpeakeasyMetadata({ data: "json, name=suggestSmartRepliesResponse" })
  suggestSmartRepliesResponse?: GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
}
