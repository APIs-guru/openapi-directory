import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";



// GoogleCloudDialogflowV2AgentAssistantRecord
/** 
 * Represents a record of a human agent assist answer.
**/
export class GoogleCloudDialogflowV2AgentAssistantRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleSuggestionAnswer" })
  articleSuggestionAnswer?: GoogleCloudDialogflowV2ArticleAnswer;

  @SpeakeasyMetadata({ data: "json, name=faqAnswer" })
  faqAnswer?: GoogleCloudDialogflowV2FaqAnswer;
}
