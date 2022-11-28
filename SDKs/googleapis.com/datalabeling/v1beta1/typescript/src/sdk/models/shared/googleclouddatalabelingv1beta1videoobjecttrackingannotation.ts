import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingFrame } from "./googleclouddatalabelingv1beta1objecttrackingframe";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";



// GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
/** 
 * Video object tracking annotation.
**/
export class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=objectTrackingFrames", elemType: GoogleCloudDatalabelingV1beta1ObjectTrackingFrame })
  objectTrackingFrames?: GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[];

  @SpeakeasyMetadata({ data: "json, name=timeSegment" })
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
