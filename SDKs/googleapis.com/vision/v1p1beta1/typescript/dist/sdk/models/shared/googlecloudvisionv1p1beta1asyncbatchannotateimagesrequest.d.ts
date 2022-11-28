import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";
import { GoogleCloudVisionV1p1beta1AnnotateImageRequest } from "./googlecloudvisionv1p1beta1annotateimagerequest";
/**
 * Request for async image annotation for a list of images.
**/
export declare class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest extends SpeakeasyBase {
    outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
    parent?: string;
    requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
}
