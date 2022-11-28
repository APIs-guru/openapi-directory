import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationConfig } from "./googleclouddatalabelingv1beta1evaluationconfig";
import { GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig } from "./googleclouddatalabelingv1beta1evaluationjobalertconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";



// GoogleCloudDatalabelingV1beta1EvaluationJobConfig
/** 
 * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationJobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryImportKeys" })
  bigqueryImportKeys?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=boundingPolyConfig" })
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

  @SpeakeasyMetadata({ data: "json, name=evaluationConfig" })
  evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;

  @SpeakeasyMetadata({ data: "json, name=evaluationJobAlertConfig" })
  evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;

  @SpeakeasyMetadata({ data: "json, name=exampleCount" })
  exampleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=exampleSamplePercentage" })
  exampleSamplePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=humanAnnotationConfig" })
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @SpeakeasyMetadata({ data: "json, name=imageClassificationConfig" })
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=textClassificationConfig" })
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
}
