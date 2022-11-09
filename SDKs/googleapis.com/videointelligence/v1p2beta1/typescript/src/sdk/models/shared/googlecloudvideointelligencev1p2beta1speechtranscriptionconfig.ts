import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVideointelligenceV1p2beta1SpeechContext } from "./googlecloudvideointelligencev1p2beta1speechcontext";


// GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig
/** 
 * Config for SPEECH_TRANSCRIPTION.
**/
export class GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioTracks" })
  audioTracks?: number[];

  @Metadata({ data: "json, name=diarizationSpeakerCount" })
  diarizationSpeakerCount?: number;

  @Metadata({ data: "json, name=enableAutomaticPunctuation" })
  enableAutomaticPunctuation?: boolean;

  @Metadata({ data: "json, name=enableSpeakerDiarization" })
  enableSpeakerDiarization?: boolean;

  @Metadata({ data: "json, name=enableWordConfidence" })
  enableWordConfidence?: boolean;

  @Metadata({ data: "json, name=filterProfanity" })
  filterProfanity?: boolean;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=maxAlternatives" })
  maxAlternatives?: number;

  @Metadata({ data: "json, name=speechContexts", elemType: shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext })
  speechContexts?: GoogleCloudVideointelligenceV1p2beta1SpeechContext[];
}
