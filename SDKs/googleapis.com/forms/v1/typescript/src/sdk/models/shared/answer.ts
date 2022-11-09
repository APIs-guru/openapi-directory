import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileUploadAnswers } from "./fileuploadanswers";
import { Grade } from "./grade";
import { TextAnswers } from "./textanswers";


// Answer
/** 
 * The submitted answer for a question.
**/
export class Answer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileUploadAnswers" })
  fileUploadAnswers?: FileUploadAnswers;

  @Metadata({ data: "json, name=grade" })
  grade?: Grade;

  @Metadata({ data: "json, name=questionId" })
  questionId?: string;

  @Metadata({ data: "json, name=textAnswers" })
  textAnswers?: TextAnswers;
}
