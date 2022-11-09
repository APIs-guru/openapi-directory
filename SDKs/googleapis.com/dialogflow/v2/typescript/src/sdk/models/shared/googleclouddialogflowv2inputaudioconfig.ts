import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2SpeechContext } from "./googleclouddialogflowv2speechcontext";

export enum GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED"
,    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16"
,    AudioEncodingFlac = "AUDIO_ENCODING_FLAC"
,    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW"
,    AudioEncodingAmr = "AUDIO_ENCODING_AMR"
,    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB"
,    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS"
,    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}

export enum GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
,    UseBestAvailable = "USE_BEST_AVAILABLE"
,    UseStandard = "USE_STANDARD"
,    UseEnhanced = "USE_ENHANCED"
}


// GoogleCloudDialogflowV2InputAudioConfig
/** 
 * Instructs the speech recognizer how to process the audio content.
**/
export class GoogleCloudDialogflowV2InputAudioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;

  @Metadata({ data: "json, name=disableNoSpeechRecognizedEvent" })
  disableNoSpeechRecognizedEvent?: boolean;

  @Metadata({ data: "json, name=enableWordInfo" })
  enableWordInfo?: boolean;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=modelVariant" })
  modelVariant?: GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;

  @Metadata({ data: "json, name=phraseHints" })
  phraseHints?: string[];

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=singleUtterance" })
  singleUtterance?: boolean;

  @Metadata({ data: "json, name=speechContexts", elemType: shared.GoogleCloudDialogflowV2SpeechContext })
  speechContexts?: GoogleCloudDialogflowV2SpeechContext[];
}
