import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Row } from "./googleclouddatalabelingv1beta1row";
/**
 * Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
**/
export declare class GoogleCloudDatalabelingV1beta1ConfusionMatrix extends SpeakeasyBase {
    row?: GoogleCloudDatalabelingV1beta1Row[];
}
