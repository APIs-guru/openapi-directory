import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrix } from "./googleclouddatalabelingv1beta1confusionmatrix";
import { GoogleCloudDatalabelingV1beta1PrCurve } from "./googleclouddatalabelingv1beta1prcurve";
/**
 * Metrics calculated for a classification model.
**/
export declare class GoogleCloudDatalabelingV1beta1ClassificationMetrics extends SpeakeasyBase {
    confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix;
    prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}
