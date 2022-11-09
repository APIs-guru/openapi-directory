import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=explicitContentDetectionConfig" })
  explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;

  @Metadata({ data: "json, name=faceDetectionConfig" })
  faceDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;

  @Metadata({ data: "json, name=labelDetectionConfig" })
  labelDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;

  @Metadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;

  @Metadata({ data: "json, name=personDetectionConfig" })
  personDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;

  @Metadata({ data: "json, name=segments", elemType: shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment })
  segments?: GoogleCloudVideointelligenceV1p2beta1VideoSegment[];

  @Metadata({ data: "json, name=shotChangeDetectionConfig" })
  shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;

  @Metadata({ data: "json, name=speechTranscriptionConfig" })
  speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;

  @Metadata({ data: "json, name=textDetectionConfig" })
  textDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
}
