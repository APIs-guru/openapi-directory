import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry } from "./googleclouddatalabelingv1beta1confusionmatrixentry";



// GoogleCloudDatalabelingV1beta1Row
/** 
 * A row in the confusion matrix. Each entry in this row has the same ground truth label.
**/
export class GoogleCloudDatalabelingV1beta1Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry })
  entries?: GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[];
}
