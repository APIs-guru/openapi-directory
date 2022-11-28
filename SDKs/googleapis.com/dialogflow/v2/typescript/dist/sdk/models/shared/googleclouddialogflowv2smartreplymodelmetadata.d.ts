import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    SmartReplyDualEncoderModel = "SMART_REPLY_DUAL_ENCODER_MODEL",
    SmartReplyBertModel = "SMART_REPLY_BERT_MODEL"
}
/**
 * Metadata for smart reply models.
**/
export declare class GoogleCloudDialogflowV2SmartReplyModelMetadata extends SpeakeasyBase {
    trainingModelType?: GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum;
}
