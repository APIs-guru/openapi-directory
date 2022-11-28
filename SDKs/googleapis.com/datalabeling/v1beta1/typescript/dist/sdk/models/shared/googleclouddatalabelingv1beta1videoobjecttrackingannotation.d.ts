import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingFrame } from "./googleclouddatalabelingv1beta1objecttrackingframe";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";
/**
 * Video object tracking annotation.
**/
export declare class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    objectTrackingFrames?: GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[];
    timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
