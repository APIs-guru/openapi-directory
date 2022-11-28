import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateImageRequest } from "./googlecloudvisionv1p1beta1annotateimagerequest";
/**
 * Multiple image annotation requests are batched into a single service call.
**/
export declare class GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
}
