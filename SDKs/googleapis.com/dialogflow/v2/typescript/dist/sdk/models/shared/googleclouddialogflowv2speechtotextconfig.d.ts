import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}
/**
 * Configures speech transcription for ConversationProfile.
**/
export declare class GoogleCloudDialogflowV2SpeechToTextConfig extends SpeakeasyBase {
    model?: string;
    speechModelVariant?: GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum;
}
