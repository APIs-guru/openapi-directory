import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3beta1synthesizespeechconfig";
export declare enum GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}
/**
 * Instructs the speech synthesizer how to generate the output audio content.
**/
export declare class GoogleCloudDialogflowCxV3beta1OutputAudioConfig extends SpeakeasyBase {
    audioEncoding?: GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum;
    sampleRateHertz?: number;
    synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
}
