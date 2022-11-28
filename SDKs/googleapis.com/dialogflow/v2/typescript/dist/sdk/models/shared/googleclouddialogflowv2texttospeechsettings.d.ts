import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";
export declare enum GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}
/**
 * Instructs the speech synthesizer on how to generate the output audio content.
**/
export declare class GoogleCloudDialogflowV2TextToSpeechSettings extends SpeakeasyBase {
    enableTextToSpeech?: boolean;
    outputAudioEncoding?: GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum;
    sampleRateHertz?: number;
    synthesizeSpeechConfigs?: Map<string, GoogleCloudDialogflowV2SynthesizeSpeechConfig>;
}
