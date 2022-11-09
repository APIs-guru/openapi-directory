import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";


// GoogleCloudDialogflowV2beta1SuggestArticlesResponse
/** 
 * The response message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2beta1SuggestArticlesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleAnswers", elemType: shared.GoogleCloudDialogflowV2beta1ArticleAnswer })
  articleAnswers?: GoogleCloudDialogflowV2beta1ArticleAnswer[];

  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
