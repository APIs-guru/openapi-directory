import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";



// GoogleCloudDatalabelingV1beta1AnnotationSpecSet
/** 
 * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationSpecSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecs", elemType: GoogleCloudDatalabelingV1beta1AnnotationSpec })
  annotationSpecs?: GoogleCloudDatalabelingV1beta1AnnotationSpec[];

  @SpeakeasyMetadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
