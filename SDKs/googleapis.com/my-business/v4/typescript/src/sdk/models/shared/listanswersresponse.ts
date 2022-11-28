import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";



// ListAnswersResponse
/** 
 * Response message for QuestionsAndAnswers.ListAnswers
**/
export class ListAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: Answer })
  answers?: Answer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
