import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileUploadAnswer } from "./fileuploadanswer";


// FileUploadAnswers
/** 
 * All submitted files for a FileUpload question.
**/
export class FileUploadAnswers extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.FileUploadAnswer })
  answers?: FileUploadAnswer[];
}
