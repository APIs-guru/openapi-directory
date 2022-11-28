import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
/**
 * Image segmentation annotation.
**/
export declare class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation extends SpeakeasyBase {
    annotationColors?: Map<string, GoogleCloudDatalabelingV1beta1AnnotationSpec>;
    imageBytes?: string;
    mimeType?: string;
}
