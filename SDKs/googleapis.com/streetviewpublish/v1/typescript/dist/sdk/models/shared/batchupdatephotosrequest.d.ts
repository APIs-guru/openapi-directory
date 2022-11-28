import { SpeakeasyBase } from "../../../internal/utils";
import { UpdatePhotoRequestInput } from "./updatephotorequest";
/**
 * Request to update the metadata of photos. Updating the pixels of photos is not supported.
**/
export declare class BatchUpdatePhotosRequestInput extends SpeakeasyBase {
    updatePhotoRequests?: UpdatePhotoRequestInput[];
}
