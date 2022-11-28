import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig } from "./googleclouddialogflowv2beta1synthesizespeechconfig";


export enum GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum {
    OutputAudioEncodingUnspecified = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED",
    OutputAudioEncodingLinear16 = "OUTPUT_AUDIO_ENCODING_LINEAR_16",
    OutputAudioEncodingMp3 = "OUTPUT_AUDIO_ENCODING_MP3",
    OutputAudioEncodingMp364Kbps = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS",
    OutputAudioEncodingOggOpus = "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
    OutputAudioEncodingMulaw = "OUTPUT_AUDIO_ENCODING_MULAW"
}


// GoogleCloudDialogflowV2beta1TextToSpeechSettings
/** 
 * Instructs the speech synthesizer on how to generate the output audio content.
**/
export class GoogleCloudDialogflowV2beta1TextToSpeechSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableTextToSpeech" })
  enableTextToSpeech?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputAudioEncoding" })
  outputAudioEncoding?: GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=synthesizeSpeechConfigs", elemType: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig })
  synthesizeSpeechConfigs?: Map<string, GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig>;
}
