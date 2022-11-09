import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";


// GoogleCloudDialogflowV2AgentAssistantRecord
/** 
 * Represents a record of a human agent assist answer.
**/
export class GoogleCloudDialogflowV2AgentAssistantRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleSuggestionAnswer" })
  articleSuggestionAnswer?: GoogleCloudDialogflowV2ArticleAnswer;

  @Metadata({ data: "json, name=faqAnswer" })
  faqAnswer?: GoogleCloudDialogflowV2FaqAnswer;
}
