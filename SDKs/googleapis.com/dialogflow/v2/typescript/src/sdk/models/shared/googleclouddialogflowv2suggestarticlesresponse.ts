import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";



// GoogleCloudDialogflowV2SuggestArticlesResponse
/** 
 * The response message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2SuggestArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleAnswers", elemType: GoogleCloudDialogflowV2ArticleAnswer })
  articleAnswers?: GoogleCloudDialogflowV2ArticleAnswer[];

  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
