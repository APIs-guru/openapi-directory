import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";



// GoogleCloudDialogflowV2beta1SuggestArticlesResponse
/** 
 * The response message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2beta1SuggestArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleAnswers", elemType: GoogleCloudDialogflowV2beta1ArticleAnswer })
  articleAnswers?: GoogleCloudDialogflowV2beta1ArticleAnswer[];

  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
