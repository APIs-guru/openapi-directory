import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileUploadAnswers } from "./fileuploadanswers";
import { Grade } from "./grade";
import { TextAnswers } from "./textanswers";



// Answer
/** 
 * The submitted answer for a question.
**/
export class Answer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileUploadAnswers" })
  fileUploadAnswers?: FileUploadAnswers;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: Grade;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=textAnswers" })
  textAnswers?: TextAnswers;
}
