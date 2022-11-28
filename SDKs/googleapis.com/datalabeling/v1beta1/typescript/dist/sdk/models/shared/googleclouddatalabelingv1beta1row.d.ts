import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry } from "./googleclouddatalabelingv1beta1confusionmatrixentry";
/**
 * A row in the confusion matrix. Each entry in this row has the same ground truth label.
**/
export declare class GoogleCloudDatalabelingV1beta1Row extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    entries?: GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[];
}
