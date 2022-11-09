import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";


// GoogleCloudDialogflowV2beta1AgentAssistantRecord
/** 
 * Represents a record of a human agent assistant answer.
**/
export class GoogleCloudDialogflowV2beta1AgentAssistantRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleSuggestionAnswer" })
  articleSuggestionAnswer?: GoogleCloudDialogflowV2beta1ArticleAnswer;

  @Metadata({ data: "json, name=faqAnswer" })
  faqAnswer?: GoogleCloudDialogflowV2beta1FaqAnswer;
}
