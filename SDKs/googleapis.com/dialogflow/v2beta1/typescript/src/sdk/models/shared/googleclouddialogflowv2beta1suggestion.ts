import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1SuggestionArticle } from "./googleclouddialogflowv2beta1suggestionarticle";
import { GoogleCloudDialogflowV2beta1SuggestionFaqAnswer } from "./googleclouddialogflowv2beta1suggestionfaqanswer";


// GoogleCloudDialogflowV2beta1Suggestion
/** 
 * Represents a suggestion for a human agent.
**/
export class GoogleCloudDialogflowV2beta1Suggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=articles", elemType: shared.GoogleCloudDialogflowV2beta1SuggestionArticle })
  articles?: GoogleCloudDialogflowV2beta1SuggestionArticle[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=faqAnswers", elemType: shared.GoogleCloudDialogflowV2beta1SuggestionFaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2beta1SuggestionFaqAnswer[];

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
