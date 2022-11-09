import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadRef
/** 
 * Upload reference for media files.
**/
export class UploadRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
