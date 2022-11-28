import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1NormalizedPolyline } from "./googleclouddatalabelingv1beta1normalizedpolyline";
import { GoogleCloudDatalabelingV1beta1Polyline } from "./googleclouddatalabelingv1beta1polyline";
/**
 * A polyline for the image annotation.
**/
export declare class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;
    polyline?: GoogleCloudDatalabelingV1beta1Polyline;
}
