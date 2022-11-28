import { SpeakeasyBase } from "../../../internal/utils";
import { FileUploadAnswers } from "./fileuploadanswers";
import { Grade } from "./grade";
import { TextAnswers } from "./textanswers";
/**
 * The submitted answer for a question.
**/
export declare class Answer extends SpeakeasyBase {
    fileUploadAnswers?: FileUploadAnswers;
    grade?: Grade;
    questionId?: string;
    textAnswers?: TextAnswers;
}
