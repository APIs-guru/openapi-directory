import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVideointelligenceV1p3beta1VideoContext } from "./googlecloudvideointelligencev1p3beta1videocontext";
export declare enum GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    LabelDetection = "LABEL_DETECTION",
    ShotChangeDetection = "SHOT_CHANGE_DETECTION",
    ExplicitContentDetection = "EXPLICIT_CONTENT_DETECTION",
    FaceDetection = "FACE_DETECTION",
    SpeechTranscription = "SPEECH_TRANSCRIPTION",
    TextDetection = "TEXT_DETECTION",
    ObjectTracking = "OBJECT_TRACKING",
    LogoRecognition = "LOGO_RECOGNITION",
    CelebrityRecognition = "CELEBRITY_RECOGNITION",
    PersonDetection = "PERSON_DETECTION"
}
/**
 * Video annotation request.
**/
export declare class GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest extends SpeakeasyBase {
    features?: GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum[];
    inputContent?: string;
    inputUri?: string;
    locationId?: string;
    outputUri?: string;
    videoContext?: GoogleCloudVideointelligenceV1p3beta1VideoContext;
}
