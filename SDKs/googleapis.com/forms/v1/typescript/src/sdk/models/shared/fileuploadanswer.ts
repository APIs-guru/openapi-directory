import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileUploadAnswer
/** 
 * Info for a single file submitted to a file upload question.
**/
export class FileUploadAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
