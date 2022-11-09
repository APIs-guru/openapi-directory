import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1SentimentConfig } from "./googleclouddatalabelingv1beta1sentimentconfig";


// GoogleCloudDatalabelingV1beta1TextClassificationConfig
/** 
 * Config for text classification human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1TextClassificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMultiLabel" })
  allowMultiLabel?: boolean;

  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=sentimentConfig" })
  sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
}
