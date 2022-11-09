import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVideointelligenceV1p2beta1VideoContext } from "./googlecloudvideointelligencev1p2beta1videocontext";

export enum GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED"
,    LabelDetection = "LABEL_DETECTION"
,    ShotChangeDetection = "SHOT_CHANGE_DETECTION"
,    ExplicitContentDetection = "EXPLICIT_CONTENT_DETECTION"
,    FaceDetection = "FACE_DETECTION"
,    SpeechTranscription = "SPEECH_TRANSCRIPTION"
,    TextDetection = "TEXT_DETECTION"
,    ObjectTracking = "OBJECT_TRACKING"
,    LogoRecognition = "LOGO_RECOGNITION"
,    PersonDetection = "PERSON_DETECTION"
}


// GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest
/** 
 * Video annotation request.
**/
export class GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features" })
  features?: GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum[];

  @Metadata({ data: "json, name=inputContent" })
  inputContent?: string;

  @Metadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @Metadata({ data: "json, name=videoContext" })
  videoContext?: GoogleCloudVideointelligenceV1p2beta1VideoContext;
}
