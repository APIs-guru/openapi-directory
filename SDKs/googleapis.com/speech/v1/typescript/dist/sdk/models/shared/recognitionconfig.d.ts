import { SpeakeasyBase } from "../../../internal/utils";
import { SpeechAdaptation } from "./speechadaptation";
import { SpeakerDiarizationConfigInput } from "./speakerdiarizationconfig";
import { RecognitionMetadata } from "./recognitionmetadata";
import { SpeechContext } from "./speechcontext";
export declare enum RecognitionConfigEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Linear16 = "LINEAR16",
    Flac = "FLAC",
    Mulaw = "MULAW",
    Amr = "AMR",
    AmrWb = "AMR_WB",
    OggOpus = "OGG_OPUS",
    SpeexWithHeaderByte = "SPEEX_WITH_HEADER_BYTE",
    WebmOpus = "WEBM_OPUS"
}
/**
 * Provides information to the recognizer that specifies how to process the request.
**/
export declare class RecognitionConfigInput extends SpeakeasyBase {
    adaptation?: SpeechAdaptation;
    alternativeLanguageCodes?: string[];
    audioChannelCount?: number;
    diarizationConfig?: SpeakerDiarizationConfigInput;
    enableAutomaticPunctuation?: boolean;
    enableSeparateRecognitionPerChannel?: boolean;
    enableSpokenEmojis?: boolean;
    enableSpokenPunctuation?: boolean;
    enableWordConfidence?: boolean;
    enableWordTimeOffsets?: boolean;
    encoding?: RecognitionConfigEncodingEnum;
    languageCode?: string;
    maxAlternatives?: number;
    metadata?: RecognitionMetadata;
    model?: string;
    profanityFilter?: boolean;
    sampleRateHertz?: number;
    speechContexts?: SpeechContext[];
    useEnhanced?: boolean;
}
