import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig } from "./googleclouddialogflowcxv3beta1synthesizespeechconfig";


export enum GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowCxV3beta1OutputAudioConfig
/** 
 * Instructs the speech synthesizer how to generate the output audio content.
**/
export class GoogleCloudDialogflowCxV3beta1OutputAudioConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=synthesizeSpeechConfig" })
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
}
