import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpeechAdaptation } from "./speechadaptation";
import { SpeakerDiarizationConfigInput } from "./speakerdiarizationconfig";
import { RecognitionMetadata } from "./recognitionmetadata";
import { SpeechContext } from "./speechcontext";
import { TranscriptNormalization } from "./transcriptnormalization";


export enum RecognitionConfigEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Linear16 = "LINEAR16",
    Flac = "FLAC",
    Mulaw = "MULAW",
    Amr = "AMR",
    AmrWb = "AMR_WB",
    OggOpus = "OGG_OPUS",
    SpeexWithHeaderByte = "SPEEX_WITH_HEADER_BYTE",
    Mp3 = "MP3",
    WebmOpus = "WEBM_OPUS"
}


// RecognitionConfigInput
/** 
 * Provides information to the recognizer that specifies how to process the request.
**/
export class RecognitionConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaptation" })
  adaptation?: SpeechAdaptation;

  @SpeakeasyMetadata({ data: "json, name=alternativeLanguageCodes" })
  alternativeLanguageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=audioChannelCount" })
  audioChannelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=diarizationConfig" })
  diarizationConfig?: SpeakerDiarizationConfigInput;

  @SpeakeasyMetadata({ data: "json, name=diarizationSpeakerCount" })
  diarizationSpeakerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=enableAutomaticPunctuation" })
  enableAutomaticPunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSeparateRecognitionPerChannel" })
  enableSeparateRecognitionPerChannel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSpeakerDiarization" })
  enableSpeakerDiarization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSpokenEmojis" })
  enableSpokenEmojis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSpokenPunctuation" })
  enableSpokenPunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableWordConfidence" })
  enableWordConfidence?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableWordTimeOffsets" })
  enableWordTimeOffsets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: RecognitionConfigEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=maxAlternatives" })
  maxAlternatives?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: RecognitionMetadata;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=profanityFilter" })
  profanityFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=speechContexts", elemType: SpeechContext })
  speechContexts?: SpeechContext[];

  @SpeakeasyMetadata({ data: "json, name=transcriptNormalization" })
  transcriptNormalization?: TranscriptNormalization;

  @SpeakeasyMetadata({ data: "json, name=useEnhanced" })
  useEnhanced?: boolean;
}
