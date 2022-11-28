import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1FaceDetectionConfig } from "./googlecloudvideointelligencev1facedetectionconfig";
import { GoogleCloudVideointelligenceV1LabelDetectionConfig } from "./googlecloudvideointelligencev1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1ObjectTrackingConfig } from "./googlecloudvideointelligencev1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1PersonDetectionConfig } from "./googlecloudvideointelligencev1persondetectionconfig";
import { GoogleCloudVideointelligenceV1VideoSegment } from "./googlecloudvideointelligencev1videosegment";
import { GoogleCloudVideointelligenceV1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1TextDetectionConfig } from "./googlecloudvideointelligencev1textdetectionconfig";
/**
 * Video context and/or feature-specific parameters.
**/
export declare class GoogleCloudVideointelligenceV1VideoContext extends SpeakeasyBase {
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig;
    faceDetectionConfig?: GoogleCloudVideointelligenceV1FaceDetectionConfig;
    labelDetectionConfig?: GoogleCloudVideointelligenceV1LabelDetectionConfig;
    objectTrackingConfig?: GoogleCloudVideointelligenceV1ObjectTrackingConfig;
    personDetectionConfig?: GoogleCloudVideointelligenceV1PersonDetectionConfig;
    segments?: GoogleCloudVideointelligenceV1VideoSegment[];
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1ShotChangeDetectionConfig;
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1SpeechTranscriptionConfig;
    textDetectionConfig?: GoogleCloudVideointelligenceV1TextDetectionConfig;
}
