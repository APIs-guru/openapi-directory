import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { Image } from "./image";
import { ImageContext } from "./imagecontext";
/**
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export declare class AnnotateImageRequest extends SpeakeasyBase {
    features?: Feature[];
    image?: Image;
    imageContext?: ImageContext;
}
