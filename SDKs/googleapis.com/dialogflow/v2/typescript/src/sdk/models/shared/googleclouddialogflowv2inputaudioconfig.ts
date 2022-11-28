import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SpeechContext } from "./googleclouddialogflowv2speechcontext";


export enum GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED",
    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16",
    AudioEncodingFlac = "AUDIO_ENCODING_FLAC",
    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW",
    AudioEncodingAmr = "AUDIO_ENCODING_AMR",
    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB",
    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS",
    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}

export enum GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED",
    UseBestAvailable = "USE_BEST_AVAILABLE",
    UseStandard = "USE_STANDARD",
    UseEnhanced = "USE_ENHANCED"
}


// GoogleCloudDialogflowV2InputAudioConfig
/** 
 * Instructs the speech recognizer how to process the audio content.
**/
export class GoogleCloudDialogflowV2InputAudioConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=disableNoSpeechRecognizedEvent" })
  disableNoSpeechRecognizedEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableWordInfo" })
  enableWordInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=modelVariant" })
  modelVariant?: GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;

  @SpeakeasyMetadata({ data: "json, name=phraseHints" })
  phraseHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=singleUtterance" })
  singleUtterance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=speechContexts", elemType: GoogleCloudDialogflowV2SpeechContext })
  speechContexts?: GoogleCloudDialogflowV2SpeechContext[];
}
