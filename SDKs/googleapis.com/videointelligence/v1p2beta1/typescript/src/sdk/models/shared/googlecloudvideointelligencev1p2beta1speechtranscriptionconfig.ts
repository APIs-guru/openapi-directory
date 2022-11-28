import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p2beta1SpeechContext } from "./googlecloudvideointelligencev1p2beta1speechcontext";



// GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig
/** 
 * Config for SPEECH_TRANSCRIPTION.
**/
export class GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioTracks" })
  audioTracks?: number[];

  @SpeakeasyMetadata({ data: "json, name=diarizationSpeakerCount" })
  diarizationSpeakerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=enableAutomaticPunctuation" })
  enableAutomaticPunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSpeakerDiarization" })
  enableSpeakerDiarization?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableWordConfidence" })
  enableWordConfidence?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filterProfanity" })
  filterProfanity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=maxAlternatives" })
  maxAlternatives?: number;

  @SpeakeasyMetadata({ data: "json, name=speechContexts", elemType: GoogleCloudVideointelligenceV1p2beta1SpeechContext })
  speechContexts?: GoogleCloudVideointelligenceV1p2beta1SpeechContext[];
}
