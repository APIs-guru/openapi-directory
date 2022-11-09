import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";


// GoogleCloudDialogflowV2SuggestArticlesResponse
/** 
 * The response message for Participants.SuggestArticles.
**/
export class GoogleCloudDialogflowV2SuggestArticlesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleAnswers", elemType: shared.GoogleCloudDialogflowV2ArticleAnswer })
  articleAnswers?: GoogleCloudDialogflowV2ArticleAnswer[];

  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
