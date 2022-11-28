import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhotoInput } from "./photo";



// UpdatePhotoRequestInput
/** 
 * Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
**/
export class UpdatePhotoRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: PhotoInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
