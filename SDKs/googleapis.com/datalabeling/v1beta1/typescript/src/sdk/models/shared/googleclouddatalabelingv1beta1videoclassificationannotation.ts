import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";



// GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation
/** 
 * Video classification annotation.
**/
export class GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=timeSegment" })
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
