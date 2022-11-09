import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingFrame } from "./googleclouddatalabelingv1beta1objecttrackingframe";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";


// GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
/** 
 * Video object tracking annotation.
**/
export class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=objectTrackingFrames", elemType: shared.GoogleCloudDatalabelingV1beta1ObjectTrackingFrame })
  objectTrackingFrames?: GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[];

  @Metadata({ data: "json, name=timeSegment" })
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
