import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileUploadAnswer } from "./fileuploadanswer";



// FileUploadAnswers
/** 
 * All submitted files for a FileUpload question.
**/
export class FileUploadAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: FileUploadAnswer })
  answers?: FileUploadAnswer[];
}
