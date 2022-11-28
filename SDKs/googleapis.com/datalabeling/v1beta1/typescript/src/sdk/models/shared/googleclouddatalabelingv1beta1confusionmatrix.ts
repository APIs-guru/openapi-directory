import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Row } from "./googleclouddatalabelingv1beta1row";



// GoogleCloudDatalabelingV1beta1ConfusionMatrix
/** 
 * Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
**/
export class GoogleCloudDatalabelingV1beta1ConfusionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=row", elemType: GoogleCloudDatalabelingV1beta1Row })
  row?: GoogleCloudDatalabelingV1beta1Row[];
}
