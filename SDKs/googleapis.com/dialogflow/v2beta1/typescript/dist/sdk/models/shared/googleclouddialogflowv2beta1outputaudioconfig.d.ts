import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig } from "./googleclouddialogflowv2beta1synthesizespeechconfig";
export declare enum GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}
/**
 * Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
**/
export declare class GoogleCloudDialogflowV2beta1OutputAudioConfig extends SpeakeasyBase {
    audioEncoding?: GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum;
    sampleRateHertz?: number;
    synthesizeSpeechConfig?: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
}
