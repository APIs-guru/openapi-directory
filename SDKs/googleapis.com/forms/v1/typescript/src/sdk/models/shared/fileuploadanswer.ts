import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileUploadAnswer
/** 
 * Info for a single file submitted to a file upload question.
**/
export class FileUploadAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
