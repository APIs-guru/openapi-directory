import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1Image } from "./googlecloudvisionv1p1beta1image";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
/**
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export declare class GoogleCloudVisionV1p1beta1AnnotateImageRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p1beta1Feature[];
    image?: GoogleCloudVisionV1p1beta1Image;
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
}
