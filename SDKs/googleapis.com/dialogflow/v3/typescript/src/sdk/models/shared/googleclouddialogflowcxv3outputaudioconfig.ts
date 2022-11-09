import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3synthesizespeechconfig";

export enum GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
,    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
,    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3"
,    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
,    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
,    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowCxV3OutputAudioConfig
/** 
 * Instructs the speech synthesizer how to generate the output audio content.
**/
export class GoogleCloudDialogflowCxV3OutputAudioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum;

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=synthesizeSpeechConfig" })
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3SynthesizeSpeechConfig;
}
