import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";


// GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation
/** 
 * Image classification annotation definition.
**/
export class GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}
