import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";
/**
 * Image bounding poly annotation. It represents a polygon including bounding box in the image.
**/
export declare class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;
    normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
}
