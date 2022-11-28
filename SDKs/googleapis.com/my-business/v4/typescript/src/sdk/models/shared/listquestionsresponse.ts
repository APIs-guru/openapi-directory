import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Question } from "./question";



// ListQuestionsResponse
/** 
 * Response message for QuestionsAndAnswers.ListQuestions
**/
export class ListQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: Question })
  questions?: Question[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
