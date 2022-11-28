import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1SentimentConfig } from "./googleclouddatalabelingv1beta1sentimentconfig";
/**
 * Config for text classification human labeling task.
**/
export declare class GoogleCloudDatalabelingV1beta1TextClassificationConfig extends SpeakeasyBase {
    allowMultiLabel?: boolean;
    annotationSpecSet?: string;
    sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
}
