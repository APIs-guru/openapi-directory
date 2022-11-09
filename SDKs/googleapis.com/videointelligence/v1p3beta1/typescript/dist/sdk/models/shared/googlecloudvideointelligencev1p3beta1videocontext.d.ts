import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p3beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p3beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p3beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p3beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p3beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1VideoSegment } from "./googlecloudvideointelligencev1p3beta1videosegment";
import { GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p3beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p3beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p3beta1textdetectionconfig";
/**
 * Video context and/or feature-specific parameters.
**/
export declare class GoogleCloudVideointelligenceV1p3beta1VideoContext extends SpeakeasyBase {
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig;
    faceDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig;
    labelDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig;
    objectTrackingConfig?: GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig;
    personDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig;
    segments?: GoogleCloudVideointelligenceV1p3beta1VideoSegment[];
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig;
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig;
    textDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig;
}
