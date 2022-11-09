import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrix } from "./googleclouddatalabelingv1beta1confusionmatrix";
import { GoogleCloudDatalabelingV1beta1PrCurve } from "./googleclouddatalabelingv1beta1prcurve";


// GoogleCloudDatalabelingV1beta1ClassificationMetrics
/** 
 * Metrics calculated for a classification model.
**/
export class GoogleCloudDatalabelingV1beta1ClassificationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=confusionMatrix" })
  confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix;

  @Metadata({ data: "json, name=prCurve" })
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}
