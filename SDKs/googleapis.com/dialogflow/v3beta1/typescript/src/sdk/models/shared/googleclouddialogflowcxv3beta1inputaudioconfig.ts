import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum {
    AudioEncodingUnspecified = "AUDIO_ENCODING_UNSPECIFIED"
,    AudioEncodingLinear16 = "AUDIO_ENCODING_LINEAR_16"
,    AudioEncodingFlac = "AUDIO_ENCODING_FLAC"
,    AudioEncodingMulaw = "AUDIO_ENCODING_MULAW"
,    AudioEncodingAmr = "AUDIO_ENCODING_AMR"
,    AudioEncodingAmrWb = "AUDIO_ENCODING_AMR_WB"
,    AudioEncodingOggOpus = "AUDIO_ENCODING_OGG_OPUS"
,    AudioEncodingSpeexWithHeaderByte = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"
}

export enum GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum {
    SpeechModelVariantUnspecified = "SPEECH_MODEL_VARIANT_UNSPECIFIED"
,    UseBestAvailable = "USE_BEST_AVAILABLE"
,    UseStandard = "USE_STANDARD"
,    UseEnhanced = "USE_ENHANCED"
}


// GoogleCloudDialogflowCxV3beta1InputAudioConfig
/** 
 * Instructs the speech recognizer on how to process the audio content.
**/
export class GoogleCloudDialogflowCxV3beta1InputAudioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioEncoding" })
  audioEncoding?: GoogleCloudDialogflowCxV3beta1InputAudioConfigAudioEncodingEnum;

  @Metadata({ data: "json, name=enableWordInfo" })
  enableWordInfo?: boolean;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=modelVariant" })
  modelVariant?: GoogleCloudDialogflowCxV3beta1InputAudioConfigModelVariantEnum;

  @Metadata({ data: "json, name=phraseHints" })
  phraseHints?: string[];

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=singleUtterance" })
  singleUtterance?: boolean;
}
