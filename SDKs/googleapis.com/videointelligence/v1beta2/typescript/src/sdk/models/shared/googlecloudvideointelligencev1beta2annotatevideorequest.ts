import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1beta2VideoContext } from "./googlecloudvideointelligencev1beta2videocontext";


export enum GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum {
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


// GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest
/** 
 * Video annotation request.
**/
export class GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=inputContent" })
  inputContent?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=videoContext" })
  videoContext?: GoogleCloudVideointelligenceV1beta2VideoContext;
}
