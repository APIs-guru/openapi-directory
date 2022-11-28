import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p3beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p3beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p3beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p3beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p3beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1VideoSegment } from "./googlecloudvideointelligencev1p3beta1videosegment";
import { GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p3beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p3beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p3beta1textdetectionconfig";



// GoogleCloudVideointelligenceV1p3beta1VideoContext
/** 
 * Video context and/or feature-specific parameters.
**/
export class GoogleCloudVideointelligenceV1p3beta1VideoContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitContentDetectionConfig" })
  explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=faceDetectionConfig" })
  faceDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=labelDetectionConfig" })
  labelDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=personDetectionConfig" })
  personDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: GoogleCloudVideointelligenceV1p3beta1VideoSegment })
  segments?: GoogleCloudVideointelligenceV1p3beta1VideoSegment[];

  @SpeakeasyMetadata({ data: "json, name=shotChangeDetectionConfig" })
  shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=speechTranscriptionConfig" })
  speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig;

  @SpeakeasyMetadata({ data: "json, name=textDetectionConfig" })
  textDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig;
}
