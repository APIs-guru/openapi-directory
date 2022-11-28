import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    SmartReplyDualEncoderModel = "SMART_REPLY_DUAL_ENCODER_MODEL",
    SmartReplyBertModel = "SMART_REPLY_BERT_MODEL"
}


// GoogleCloudDialogflowV2ArticleSuggestionModelMetadata
/** 
 * Metadata for article suggestion models.
**/
export class GoogleCloudDialogflowV2ArticleSuggestionModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trainingModelType" })
  trainingModelType?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum;
}
