import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SpeechAdaptation } from "./speechadaptation";
import { SpeakerDiarizationConfig } from "./speakerdiarizationconfig";
import { RecognitionMetadata } from "./recognitionmetadata";
import { SpeechContext } from "./speechcontext";

export enum RecognitionConfigEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED"
,    Linear16 = "LINEAR16"
,    Flac = "FLAC"
,    Mulaw = "MULAW"
,    Amr = "AMR"
,    AmrWb = "AMR_WB"
,    OggOpus = "OGG_OPUS"
,    SpeexWithHeaderByte = "SPEEX_WITH_HEADER_BYTE"
,    WebmOpus = "WEBM_OPUS"
}


// RecognitionConfig
/** 
 * Provides information to the recognizer that specifies how to process the request.
**/
export class RecognitionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=adaptation" })
  adaptation?: SpeechAdaptation;

  @Metadata({ data: "json, name=alternativeLanguageCodes" })
  alternativeLanguageCodes?: string[];

  @Metadata({ data: "json, name=audioChannelCount" })
  audioChannelCount?: number;

  @Metadata({ data: "json, name=diarizationConfig" })
  diarizationConfig?: SpeakerDiarizationConfig;

  @Metadata({ data: "json, name=enableAutomaticPunctuation" })
  enableAutomaticPunctuation?: boolean;

  @Metadata({ data: "json, name=enableSeparateRecognitionPerChannel" })
  enableSeparateRecognitionPerChannel?: boolean;

  @Metadata({ data: "json, name=enableSpokenEmojis" })
  enableSpokenEmojis?: boolean;

  @Metadata({ data: "json, name=enableSpokenPunctuation" })
  enableSpokenPunctuation?: boolean;

  @Metadata({ data: "json, name=enableWordConfidence" })
  enableWordConfidence?: boolean;

  @Metadata({ data: "json, name=enableWordTimeOffsets" })
  enableWordTimeOffsets?: boolean;

  @Metadata({ data: "json, name=encoding" })
  encoding?: RecognitionConfigEncodingEnum;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=maxAlternatives" })
  maxAlternatives?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: RecognitionMetadata;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=profanityFilter" })
  profanityFilter?: boolean;

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @Metadata({ data: "json, name=speechContexts", elemType: shared.SpeechContext })
  speechContexts?: SpeechContext[];

  @Metadata({ data: "json, name=useEnhanced" })
  useEnhanced?: boolean;
}
