import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1ClassificationMetrics } from "./googleclouddatalabelingv1beta1classificationmetrics";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics } from "./googleclouddatalabelingv1beta1objectdetectionmetrics";


export class GoogleCloudDatalabelingV1beta1EvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationMetrics" })
  classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics;

  @Metadata({ data: "json, name=objectDetectionMetrics" })
  objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
}
