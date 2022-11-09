import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1FaceDetectionConfig } from "./googlecloudvideointelligencev1facedetectionconfig";
import { GoogleCloudVideointelligenceV1LabelDetectionConfig } from "./googlecloudvideointelligencev1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1ObjectTrackingConfig } from "./googlecloudvideointelligencev1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1PersonDetectionConfig } from "./googlecloudvideointelligencev1persondetectionconfig";
import { GoogleCloudVideointelligenceV1VideoSegment } from "./googlecloudvideointelligencev1videosegment";
import { GoogleCloudVideointelligenceV1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1TextDetectionConfig } from "./googlecloudvideointelligencev1textdetectionconfig";


// GoogleCloudVideointelligenceV1VideoContext
/** 
 * Video context and/or feature-specific parameters.
**/
export class GoogleCloudVideointelligenceV1VideoContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicitContentDetectionConfig" })
  explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig;

  @Metadata({ data: "json, name=faceDetectionConfig" })
  faceDetectionConfig?: GoogleCloudVideointelligenceV1FaceDetectionConfig;

  @Metadata({ data: "json, name=labelDetectionConfig" })
  labelDetectionConfig?: GoogleCloudVideointelligenceV1LabelDetectionConfig;

  @Metadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudVideointelligenceV1ObjectTrackingConfig;

  @Metadata({ data: "json, name=personDetectionConfig" })
  personDetectionConfig?: GoogleCloudVideointelligenceV1PersonDetectionConfig;

  @Metadata({ data: "json, name=segments", elemType: shared.GoogleCloudVideointelligenceV1VideoSegment })
  segments?: GoogleCloudVideointelligenceV1VideoSegment[];

  @Metadata({ data: "json, name=shotChangeDetectionConfig" })
  shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1ShotChangeDetectionConfig;

  @Metadata({ data: "json, name=speechTranscriptionConfig" })
  speechTranscriptionConfig?: GoogleCloudVideointelligenceV1SpeechTranscriptionConfig;

  @Metadata({ data: "json, name=textDetectionConfig" })
  textDetectionConfig?: GoogleCloudVideointelligenceV1TextDetectionConfig;
}
