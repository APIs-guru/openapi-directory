import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";
/**
 * Represents a record of a human agent assistant answer.
**/
export declare class GoogleCloudDialogflowV2beta1AgentAssistantRecord extends SpeakeasyBase {
    articleSuggestionAnswer?: GoogleCloudDialogflowV2beta1ArticleAnswer;
    faqAnswer?: GoogleCloudDialogflowV2beta1FaqAnswer;
}
