import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer } from "./googleclouddialogflowv2beta1knowledgeanswersanswer";


// GoogleCloudDialogflowV2beta1KnowledgeAnswers
/** 
 * Represents the result of querying a Knowledge base.
**/
export class GoogleCloudDialogflowV2beta1KnowledgeAnswers extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer })
  answers?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer[];
}
