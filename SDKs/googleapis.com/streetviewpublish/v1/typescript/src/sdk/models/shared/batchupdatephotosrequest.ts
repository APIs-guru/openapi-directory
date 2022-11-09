import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdatePhotoRequest } from "./updatephotorequest";


// BatchUpdatePhotosRequest
/** 
 * Request to update the metadata of photos. Updating the pixels of photos is not supported.
**/
export class BatchUpdatePhotosRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=updatePhotoRequests", elemType: shared.UpdatePhotoRequest })
  updatePhotoRequests?: UpdatePhotoRequest[];
}
