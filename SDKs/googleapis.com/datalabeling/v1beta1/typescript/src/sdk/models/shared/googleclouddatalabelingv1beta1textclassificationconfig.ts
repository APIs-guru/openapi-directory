import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1SentimentConfig } from "./googleclouddatalabelingv1beta1sentimentconfig";



// GoogleCloudDatalabelingV1beta1TextClassificationConfig
/** 
 * Config for text classification human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1TextClassificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMultiLabel" })
  allowMultiLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentConfig" })
  sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
}
