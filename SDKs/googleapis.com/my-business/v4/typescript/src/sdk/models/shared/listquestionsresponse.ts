import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Question } from "./question";


// ListQuestionsResponse
/** 
 * Response message for QuestionsAndAnswers.ListQuestions
**/
export class ListQuestionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=questions", elemType: shared.Question })
  questions?: Question[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
