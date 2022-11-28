import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestionArticle } from "./googleclouddialogflowv2beta1suggestionarticle";
import { GoogleCloudDialogflowV2beta1SuggestionFaqAnswer } from "./googleclouddialogflowv2beta1suggestionfaqanswer";
/**
 * Represents a suggestion for a human agent.
**/
export declare class GoogleCloudDialogflowV2beta1Suggestion extends SpeakeasyBase {
    articles?: GoogleCloudDialogflowV2beta1SuggestionArticle[];
    createTime?: string;
    faqAnswers?: GoogleCloudDialogflowV2beta1SuggestionFaqAnswer[];
    latestMessage?: string;
    name?: string;
}
