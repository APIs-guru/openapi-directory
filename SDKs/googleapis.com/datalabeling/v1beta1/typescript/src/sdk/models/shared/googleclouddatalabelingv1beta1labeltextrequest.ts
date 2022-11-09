import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";

export enum GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    TextClassification = "TEXT_CLASSIFICATION"
,    TextEntityExtraction = "TEXT_ENTITY_EXTRACTION"
}


// GoogleCloudDatalabelingV1beta1LabelTextRequest
/** 
 * Request message for LabelText.
**/
export class GoogleCloudDatalabelingV1beta1LabelTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicConfig" })
  basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @Metadata({ data: "json, name=feature" })
  feature?: GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;

  @Metadata({ data: "json, name=textClassificationConfig" })
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;

  @Metadata({ data: "json, name=textEntityExtractionConfig" })
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
}
