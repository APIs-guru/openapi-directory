import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1beta2explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1beta2FaceDetectionConfig } from "./googlecloudvideointelligencev1beta2facedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2LabelDetectionConfig } from "./googlecloudvideointelligencev1beta2labeldetectionconfig";
import { GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig } from "./googlecloudvideointelligencev1beta2objecttrackingconfig";
import { GoogleCloudVideointelligenceV1beta2PersonDetectionConfig } from "./googlecloudvideointelligencev1beta2persondetectionconfig";
import { GoogleCloudVideointelligenceV1beta2VideoSegment } from "./googlecloudvideointelligencev1beta2videosegment";
import { GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1beta2shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1beta2speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1beta2TextDetectionConfig } from "./googlecloudvideointelligencev1beta2textdetectionconfig";
/**
 * Video context and/or feature-specific parameters.
**/
export declare class GoogleCloudVideointelligenceV1beta2VideoContext extends SpeakeasyBase {
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;
    faceDetectionConfig?: GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;
    labelDetectionConfig?: GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
    objectTrackingConfig?: GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;
    personDetectionConfig?: GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;
    segments?: GoogleCloudVideointelligenceV1beta2VideoSegment[];
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;
    textDetectionConfig?: GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
}
