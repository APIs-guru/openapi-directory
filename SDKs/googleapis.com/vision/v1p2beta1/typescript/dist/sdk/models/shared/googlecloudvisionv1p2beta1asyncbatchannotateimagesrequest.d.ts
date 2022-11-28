import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1OutputConfig } from "./googlecloudvisionv1p2beta1outputconfig";
import { GoogleCloudVisionV1p2beta1AnnotateImageRequest } from "./googlecloudvisionv1p2beta1annotateimagerequest";
/**
 * Request for async image annotation for a list of images.
**/
export declare class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
    outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
    parent?: string;
    requests?: GoogleCloudVisionV1p2beta1AnnotateImageRequest[];
}
