import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1SequentialSegment } from "./googleclouddatalabelingv1beta1sequentialsegment";



// GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
/** 
 * Text entity extraction annotation.
**/
export class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=sequentialSegment" })
  sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment;
}
