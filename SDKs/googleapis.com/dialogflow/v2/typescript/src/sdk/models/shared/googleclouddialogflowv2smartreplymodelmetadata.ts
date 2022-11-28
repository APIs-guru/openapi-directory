import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    SmartReplyDualEncoderModel = "SMART_REPLY_DUAL_ENCODER_MODEL",
    SmartReplyBertModel = "SMART_REPLY_BERT_MODEL"
}


// GoogleCloudDialogflowV2SmartReplyModelMetadata
/** 
 * Metadata for smart reply models.
**/
export class GoogleCloudDialogflowV2SmartReplyModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trainingModelType" })
  trainingModelType?: GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum;
}
