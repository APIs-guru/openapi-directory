import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";

export enum GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
,    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
,    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3"
,    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
,    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
,    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowV2OutputAudioConfig
/** 
 * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
**/
export class GoogleCloudDialogflowV2OutputAudioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=synthesizeSpeechConfig" })
  synthesizeSpeechConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
}
