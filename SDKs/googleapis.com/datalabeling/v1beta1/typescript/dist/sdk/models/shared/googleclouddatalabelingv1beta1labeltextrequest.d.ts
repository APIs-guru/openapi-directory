import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
export declare enum GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    TextClassification = "TEXT_CLASSIFICATION",
    TextEntityExtraction = "TEXT_ENTITY_EXTRACTION"
}
/**
 * Request message for LabelText.
**/
export declare class GoogleCloudDatalabelingV1beta1LabelTextRequest extends SpeakeasyBase {
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    feature?: GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
}
