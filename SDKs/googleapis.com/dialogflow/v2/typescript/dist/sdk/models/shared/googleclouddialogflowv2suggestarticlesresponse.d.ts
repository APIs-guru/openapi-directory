import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";
/**
 * The response message for Participants.SuggestArticles.
**/
export declare class GoogleCloudDialogflowV2SuggestArticlesResponse extends SpeakeasyBase {
    articleAnswers?: GoogleCloudDialogflowV2ArticleAnswer[];
    contextSize?: number;
    latestMessage?: string;
}
