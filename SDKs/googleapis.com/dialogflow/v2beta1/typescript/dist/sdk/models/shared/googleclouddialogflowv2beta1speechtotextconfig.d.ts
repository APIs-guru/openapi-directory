import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}
/**
 * Configures speech transcription for ConversationProfile.
**/
export declare class GoogleCloudDialogflowV2beta1SpeechToTextConfig extends SpeakeasyBase {
    model?: string;
    speechModelVariant?: GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum;
}
