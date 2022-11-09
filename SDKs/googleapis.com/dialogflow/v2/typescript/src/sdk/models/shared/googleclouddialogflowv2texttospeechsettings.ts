import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";

export enum GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
,    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
,    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3"
,    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
,    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
,    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowV2TextToSpeechSettings
/** 
 * Instructs the speech synthesizer on how to generate the output audio content.
**/
export class GoogleCloudDialogflowV2TextToSpeechSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableTextToSpeech" })
  enableTextToSpeech?: boolean;

  @Metadata({ data: "json, name=outputAudioEncoding" })
  outputAudioEncoding?: GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum;

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=synthesizeSpeechConfigs", elemType: shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig })
  synthesizeSpeechConfigs?: Map<string, GoogleCloudDialogflowV2SynthesizeSpeechConfig>;
}
