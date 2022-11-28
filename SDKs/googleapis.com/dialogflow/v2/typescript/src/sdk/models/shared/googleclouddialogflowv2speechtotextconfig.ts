import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}


// GoogleCloudDialogflowV2SpeechToTextConfig
/** 
 * Configures speech transcription for ConversationProfile.
**/
export class GoogleCloudDialogflowV2SpeechToTextConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=speechModelVariant" })
  speechModelVariant?: GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum;
}
