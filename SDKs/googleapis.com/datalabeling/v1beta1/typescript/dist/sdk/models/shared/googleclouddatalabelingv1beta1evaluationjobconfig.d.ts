import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig } from "./googleclouddatalabelingv1beta1evaluationjobalertconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
/**
 * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
**/
export declare class GoogleCloudDatalabelingV1beta1EvaluationJobConfig extends SpeakeasyBase {
    bigqueryImportKeys?: Map<string, string>;
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;
    evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
    exampleCount?: number;
    exampleSamplePercentage?: number;
    humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
}
