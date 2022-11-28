import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3synthesizespeechconfig";
export declare enum GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum {
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
export declare class GoogleCloudDialogflowCxV3OutputAudioConfig extends SpeakeasyBase {
    audioEncoding?: GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum;
    sampleRateHertz?: number;
    synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3SynthesizeSpeechConfig;
}
