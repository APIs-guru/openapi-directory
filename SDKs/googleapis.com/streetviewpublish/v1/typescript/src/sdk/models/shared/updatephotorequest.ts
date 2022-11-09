import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Photo } from "./photo";


// UpdatePhotoRequest
/** 
 * Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
**/
export class UpdatePhotoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo" })
  photo?: Photo;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
