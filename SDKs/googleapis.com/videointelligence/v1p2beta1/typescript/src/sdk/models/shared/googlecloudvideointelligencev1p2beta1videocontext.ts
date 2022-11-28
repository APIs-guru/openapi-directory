import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p2beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p2beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p2beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p2beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p2beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1VideoSegment } from "./googlecloudvideointelligencev1p2beta1videosegment";
import { GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p2beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p2beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p2beta1textdetectionconfig";



// GoogleCloudVideointelligenceV1p2beta1VideoContext
/** 
 * Video context and/or feature-specific parameters.
**/
export class GoogleCloudVideointelligenceV1p2beta1VideoContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicitContentDetectionConfig" })
  explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=faceDetectionConfig" })
  faceDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=labelDetectionConfig" })
  labelDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=personDetectionConfig" })
  personDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: GoogleCloudVideointelligenceV1p2beta1VideoSegment })
  segments?: GoogleCloudVideointelligenceV1p2beta1VideoSegment[];

  @SpeakeasyMetadata({ data: "json, name=shotChangeDetectionConfig" })
  shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=speechTranscriptionConfig" })
  speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;

  @SpeakeasyMetadata({ data: "json, name=textDetectionConfig" })
  textDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
}
