import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";
/**
 * Video event annotation.
**/
export declare class GoogleCloudDatalabelingV1beta1VideoEventAnnotation extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
