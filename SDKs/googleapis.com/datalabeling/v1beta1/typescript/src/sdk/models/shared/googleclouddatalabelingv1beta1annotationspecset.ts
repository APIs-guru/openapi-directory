import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";


// GoogleCloudDatalabelingV1beta1AnnotationSpecSet
/** 
 * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationSpecSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecs", elemType: shared.GoogleCloudDatalabelingV1beta1AnnotationSpec })
  annotationSpecs?: GoogleCloudDatalabelingV1beta1AnnotationSpec[];

  @Metadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
