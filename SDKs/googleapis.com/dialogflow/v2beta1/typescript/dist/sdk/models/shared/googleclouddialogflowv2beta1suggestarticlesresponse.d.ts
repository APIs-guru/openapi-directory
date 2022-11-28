import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";
/**
 * The response message for Participants.SuggestArticles.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestArticlesResponse extends SpeakeasyBase {
    articleAnswers?: GoogleCloudDialogflowV2beta1ArticleAnswer[];
    contextSize?: number;
    latestMessage?: string;
}
