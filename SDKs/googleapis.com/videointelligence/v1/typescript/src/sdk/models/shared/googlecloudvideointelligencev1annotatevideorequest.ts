import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1VideoContext } from "./googlecloudvideointelligencev1videocontext";


export enum GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    LabelDetection = "LABEL_DETECTION",
    ShotChangeDetection = "SHOT_CHANGE_DETECTION",
    ExplicitContentDetection = "EXPLICIT_CONTENT_DETECTION",
    FaceDetection = "FACE_DETECTION",
    SpeechTranscription = "SPEECH_TRANSCRIPTION",
    TextDetection = "TEXT_DETECTION",
    ObjectTracking = "OBJECT_TRACKING",
    LogoRecognition = "LOGO_RECOGNITION",
    PersonDetection = "PERSON_DETECTION"
}


// GoogleCloudVideointelligenceV1AnnotateVideoRequest
/** 
 * Video annotation request.
**/
export class GoogleCloudVideointelligenceV1AnnotateVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=inputContent" })
  inputContent?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=videoContext" })
  videoContext?: GoogleCloudVideointelligenceV1VideoContext;
}
