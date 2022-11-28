import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestionArticle } from "./googleclouddialogflowv2beta1suggestionarticle";
import { GoogleCloudDialogflowV2beta1SuggestionFaqAnswer } from "./googleclouddialogflowv2beta1suggestionfaqanswer";



// GoogleCloudDialogflowV2beta1Suggestion
/** 
 * Represents a suggestion for a human agent.
**/
export class GoogleCloudDialogflowV2beta1Suggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articles", elemType: GoogleCloudDialogflowV2beta1SuggestionArticle })
  articles?: GoogleCloudDialogflowV2beta1SuggestionArticle[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=faqAnswers", elemType: GoogleCloudDialogflowV2beta1SuggestionFaqAnswer })
  faqAnswers?: GoogleCloudDialogflowV2beta1SuggestionFaqAnswer[];

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
