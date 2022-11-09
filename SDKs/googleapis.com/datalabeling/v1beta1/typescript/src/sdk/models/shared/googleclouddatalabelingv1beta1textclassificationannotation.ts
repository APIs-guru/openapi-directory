import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";


// GoogleCloudDatalabelingV1beta1TextClassificationAnnotation
/** 
 * Text classification annotation.
**/
export class GoogleCloudDatalabelingV1beta1TextClassificationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
}
