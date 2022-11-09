import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Answer } from "./answer";


// ListAnswersResponse
/** 
 * Response message for QuestionsAndAnswers.ListAnswers
**/
export class ListAnswersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.Answer })
  answers?: Answer[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
