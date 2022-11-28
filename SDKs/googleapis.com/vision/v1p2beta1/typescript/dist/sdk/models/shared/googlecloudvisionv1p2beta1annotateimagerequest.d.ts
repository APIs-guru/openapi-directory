import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1Image } from "./googlecloudvisionv1p2beta1image";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
/**
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export declare class GoogleCloudVisionV1p2beta1AnnotateImageRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p2beta1Feature[];
    image?: GoogleCloudVisionV1p2beta1Image;
    imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
}
