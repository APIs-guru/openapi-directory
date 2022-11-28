import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
/**
 * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
**/
export declare class GoogleCloudDatalabelingV1beta1AnnotationSpecSet extends SpeakeasyBase {
    annotationSpecs?: GoogleCloudDatalabelingV1beta1AnnotationSpec[];
    blockingResources?: string[];
    description?: string;
    displayName?: string;
    name?: string;
}
