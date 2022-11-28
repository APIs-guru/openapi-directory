import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageRequest } from "./googlecloudvisionv1p2beta1annotateimagerequest";
/**
 * Multiple image annotation requests are batched into a single service call.
**/
export declare class GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: GoogleCloudVisionV1p2beta1AnnotateImageRequest[];
}
