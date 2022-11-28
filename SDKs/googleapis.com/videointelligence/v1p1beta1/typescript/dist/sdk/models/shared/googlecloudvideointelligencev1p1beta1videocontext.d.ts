import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p1beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p1beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p1beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p1beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p1beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1VideoSegment } from "./googlecloudvideointelligencev1p1beta1videosegment";
import { GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p1beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p1beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p1beta1textdetectionconfig";
/**
 * Video context and/or feature-specific parameters.
**/
export declare class GoogleCloudVideointelligenceV1p1beta1VideoContext extends SpeakeasyBase {
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig;
    faceDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig;
    labelDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig;
    objectTrackingConfig?: GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig;
    personDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig;
    segments?: GoogleCloudVideointelligenceV1p1beta1VideoSegment[];
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig;
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig;
    textDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig;
}
