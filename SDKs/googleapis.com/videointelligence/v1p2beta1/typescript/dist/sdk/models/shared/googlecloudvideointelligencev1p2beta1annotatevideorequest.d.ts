import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p2beta1VideoContext } from "./googlecloudvideointelligencev1p2beta1videocontext";
export declare enum GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum {
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
export declare class GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest extends SpeakeasyBase {
    features?: GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum[];
    inputContent?: string;
    inputUri?: string;
    locationId?: string;
    outputUri?: string;
    videoContext?: GoogleCloudVideointelligenceV1p2beta1VideoContext;
}
