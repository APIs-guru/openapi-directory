import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ClassificationMetrics } from "./googleclouddatalabelingv1beta1classificationmetrics";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics } from "./googleclouddatalabelingv1beta1objectdetectionmetrics";
export declare class GoogleCloudDatalabelingV1beta1EvaluationMetrics extends SpeakeasyBase {
    classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics;
    objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
}
