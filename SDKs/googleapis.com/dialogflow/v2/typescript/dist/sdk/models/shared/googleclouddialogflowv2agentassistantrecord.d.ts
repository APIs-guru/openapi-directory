import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";
/**
 * Represents a record of a human agent assist answer.
**/
export declare class GoogleCloudDialogflowV2AgentAssistantRecord extends SpeakeasyBase {
    articleSuggestionAnswer?: GoogleCloudDialogflowV2ArticleAnswer;
    faqAnswer?: GoogleCloudDialogflowV2FaqAnswer;
}
