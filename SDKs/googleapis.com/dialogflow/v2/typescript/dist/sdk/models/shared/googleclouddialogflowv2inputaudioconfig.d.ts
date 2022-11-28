import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SpeechContext } from "./googleclouddialogflowv2speechcontext";
export declare enum GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16",
    AudioEncodingFlac = "AUDIO_ENCODING_FLAC",
    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW",
    AudioEncodingAmr = "AUDIO_ENCODING_AMR",
    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB",
    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS",
    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}
export declare enum GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}
/**
 * Instructs the speech recognizer how to process the audio content.
**/
export declare class GoogleCloudDialogflowV2InputAudioConfig extends SpeakeasyBase {
    audioEncoding?: GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;
    disableNoSpeechRecognizedEvent?: boolean;
    enableWordInfo?: boolean;
    languageCode?: string;
    model?: string;
    modelVariant?: GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;
    phraseHints?: string[];
    sampleRateHertz?: number;
    singleUtterance?: boolean;
    speechContexts?: GoogleCloudDialogflowV2SpeechContext[];
}
