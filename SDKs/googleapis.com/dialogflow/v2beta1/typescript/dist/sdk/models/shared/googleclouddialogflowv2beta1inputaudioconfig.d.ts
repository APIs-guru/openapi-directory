import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SpeechContext } from "./googleclouddialogflowv2beta1speechcontext";
export declare enum GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16",
    AudioEncodingFlac = "AUDIO_ENCODING_FLAC",
    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW",
    AudioEncodingAmr = "AUDIO_ENCODING_AMR",
    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB",
    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS",
    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}
export declare enum GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}
/**
 * Instructs the speech recognizer on how to process the audio content.
**/
export declare class GoogleCloudDialogflowV2beta1InputAudioConfig extends SpeakeasyBase {
    audioEncoding?: GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum;
    disableNoSpeechRecognizedEvent?: boolean;
    enableWordInfo?: boolean;
    languageCode?: string;
    model?: string;
    modelVariant?: GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum;
    phraseHints?: string[];
    sampleRateHertz?: number;
    singleUtterance?: boolean;
    speechContexts?: GoogleCloudDialogflowV2beta1SpeechContext[];
}
