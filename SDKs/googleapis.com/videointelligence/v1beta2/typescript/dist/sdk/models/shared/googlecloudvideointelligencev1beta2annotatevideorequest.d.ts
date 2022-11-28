import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1beta2VideoContext } from "./googlecloudvideointelligencev1beta2videocontext";
export declare enum GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum {
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
/**
 * Video annotation request.
**/
export declare class GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest extends SpeakeasyBase {
    features?: GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum[];
    inputContent?: string;
    inputUri?: string;
    locationId?: string;
    outputUri?: string;
    videoContext?: GoogleCloudVideointelligenceV1beta2VideoContext;
}
