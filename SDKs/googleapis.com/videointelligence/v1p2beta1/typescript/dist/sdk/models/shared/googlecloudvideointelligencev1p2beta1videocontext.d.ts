import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p2beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p2beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p2beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p2beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p2beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1VideoSegment } from "./googlecloudvideointelligencev1p2beta1videosegment";
import { GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p2beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p2beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p2beta1textdetectionconfig";
/**
 * Video context and/or feature-specific parameters.
**/
export declare class GoogleCloudVideointelligenceV1p2beta1VideoContext extends SpeakeasyBase {
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;
    faceDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;
    labelDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;
    objectTrackingConfig?: GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;
    personDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;
    segments?: GoogleCloudVideointelligenceV1p2beta1VideoSegment[];
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;
    textDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
}
