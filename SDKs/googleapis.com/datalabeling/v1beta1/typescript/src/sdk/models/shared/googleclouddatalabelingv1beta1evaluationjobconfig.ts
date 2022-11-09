import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=bigqueryImportKeys" })
  bigqueryImportKeys?: Map<string, string>;

  @Metadata({ data: "json, name=boundingPolyConfig" })
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

  @Metadata({ data: "json, name=evaluationConfig" })
  evaluationConfig?: GoogleCloudDatalabelingV1beta1EvaluationConfig;

  @Metadata({ data: "json, name=evaluationJobAlertConfig" })
  evaluationJobAlertConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;

  @Metadata({ data: "json, name=exampleCount" })
  exampleCount?: number;

  @Metadata({ data: "json, name=exampleSamplePercentage" })
  exampleSamplePercentage?: number;

  @Metadata({ data: "json, name=humanAnnotationConfig" })
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @Metadata({ data: "json, name=imageClassificationConfig" })
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;

  @Metadata({ data: "json, name=textClassificationConfig" })
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
}
