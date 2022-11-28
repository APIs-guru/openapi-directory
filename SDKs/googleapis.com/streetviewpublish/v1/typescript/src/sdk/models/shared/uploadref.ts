import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadRef
/** 
 * Upload reference for media files.
**/
export class UploadRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
