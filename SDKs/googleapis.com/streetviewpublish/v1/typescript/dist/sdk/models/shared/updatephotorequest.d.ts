import { SpeakeasyBase } from "../../../internal/utils";
import { PhotoInput } from "./photo";
/**
 * Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
**/
export declare class UpdatePhotoRequestInput extends SpeakeasyBase {
    photo?: PhotoInput;
    updateMask?: string;
}
