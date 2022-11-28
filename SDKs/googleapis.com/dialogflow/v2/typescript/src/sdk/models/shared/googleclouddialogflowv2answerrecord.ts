import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AgentAssistantRecord } from "./googleclouddialogflowv2agentassistantrecord";
import { GoogleCloudDialogflowV2AnswerFeedback } from "./googleclouddialogflowv2answerfeedback";



// GoogleCloudDialogflowV2AnswerRecord
/** 
 * Answer records are records to manage answer history and feedbacks for Dialogflow. Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - `DetectIntent` intent matching - `DetectIntent` knowledge Answer records are not related to the conversation history in the Dialogflow Console. A Record is generated even when the end-user disables conversation history in the console. Records are created when there's a human agent assistant suggestion generated. A typical workflow for customers provide feedback to an answer is: 1. For human agent assistant, customers get suggestion via ListSuggestions API. Together with the answers, AnswerRecord.name are returned to the customers. 2. The customer uses the AnswerRecord.name to call the UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
**/
export class GoogleCloudDialogflowV2AnswerRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentAssistantRecord" })
  agentAssistantRecord?: GoogleCloudDialogflowV2AgentAssistantRecord;

  @SpeakeasyMetadata({ data: "json, name=answerFeedback" })
  answerFeedback?: GoogleCloudDialogflowV2AnswerFeedback;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
