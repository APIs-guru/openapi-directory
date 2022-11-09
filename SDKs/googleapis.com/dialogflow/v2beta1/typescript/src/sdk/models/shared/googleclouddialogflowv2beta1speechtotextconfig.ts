import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
,    UseBestAvailable = "USE_BEST_AVAILABLE"
,    UseStandard = "USE_STANDARD"
,    UseEnhanced = "USE_ENHANCED"
}


// GoogleCloudDialogflowV2beta1SpeechToTextConfig
/** 
 * Configures speech transcription for ConversationProfile.
**/
export class GoogleCloudDialogflowV2beta1SpeechToTextConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=speechModelVariant" })
  speechModelVariant?: GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum;
}
