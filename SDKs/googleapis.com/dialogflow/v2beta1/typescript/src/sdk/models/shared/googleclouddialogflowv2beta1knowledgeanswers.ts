import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer } from "./googleclouddialogflowv2beta1knowledgeanswersanswer";



// GoogleCloudDialogflowV2beta1KnowledgeAnswers
/** 
 * Represents the result of querying a Knowledge base.
**/
export class GoogleCloudDialogflowV2beta1KnowledgeAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer })
  answers?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer[];
}
