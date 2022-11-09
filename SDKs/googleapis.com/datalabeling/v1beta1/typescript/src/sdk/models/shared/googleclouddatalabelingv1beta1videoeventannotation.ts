import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1TimeSegment } from "./googleclouddatalabelingv1beta1timesegment";


// GoogleCloudDatalabelingV1beta1VideoEventAnnotation
/** 
 * Video event annotation.
**/
export class GoogleCloudDatalabelingV1beta1VideoEventAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=timeSegment" })
  timeSegment?: GoogleCloudDatalabelingV1beta1TimeSegment;
}
