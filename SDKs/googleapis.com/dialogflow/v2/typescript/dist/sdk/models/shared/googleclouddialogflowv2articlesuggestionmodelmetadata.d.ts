import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    SmartReplyDualEncoderModel = "SMART_REPLY_DUAL_ENCODER_MODEL",
    SmartReplyBertModel = "SMART_REPLY_BERT_MODEL"
}
/**
 * Metadata for article suggestion models.
**/
export declare class GoogleCloudDialogflowV2ArticleSuggestionModelMetadata extends SpeakeasyBase {
    trainingModelType?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum;
}
