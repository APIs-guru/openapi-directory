import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";


export enum GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowV2TextToSpeechSettings
/** 
 * Instructs the speech synthesizer on how to generate the output audio content.
**/
export class GoogleCloudDialogflowV2TextToSpeechSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableTextToSpeech" })
  enableTextToSpeech?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputAudioEncoding" })
  outputAudioEncoding?: GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=synthesizeSpeechConfigs", elemType: GoogleCloudDialogflowV2SynthesizeSpeechConfig })
  synthesizeSpeechConfigs?: Map<string, GoogleCloudDialogflowV2SynthesizeSpeechConfig>;
}
