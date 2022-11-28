import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdatePhotoRequestInput } from "./updatephotorequest";



// BatchUpdatePhotosRequestInput
/** 
 * Request to update the metadata of photos. Updating the pixels of photos is not supported.
**/
export class BatchUpdatePhotosRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updatePhotoRequests", elemType: UpdatePhotoRequestInput })
  updatePhotoRequests?: UpdatePhotoRequestInput[];
}
