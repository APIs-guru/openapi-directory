import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1SequentialSegment } from "./googleclouddatalabelingv1beta1sequentialsegment";


// GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
/** 
 * Text entity extraction annotation.
**/
export class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=sequentialSegment" })
  sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment;
}
