import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1beta2explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1beta2FaceDetectionConfig } from "./googlecloudvideointelligencev1beta2facedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2LabelDetectionConfig } from "./googlecloudvideointelligencev1beta2labeldetectionconfig";
import { GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig } from "./googlecloudvideointelligencev1beta2objecttrackingconfig";
import { GoogleCloudVideointelligenceV1beta2PersonDetectionConfig } from "./googlecloudvideointelligencev1beta2persondetectionconfig";
import { GoogleCloudVideointelligenceV1beta2VideoSegment } from "./googlecloudvideointelligencev1beta2videosegment";
import { GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1beta2shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1beta2speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1beta2TextDetectionConfig } from "./googlecloudvideointelligencev1beta2textdetectionconfig";


// GoogleCloudVideointelligenceV1beta2VideoContext
/** 
 * Video context and/or feature-specific parameters.
**/
export class GoogleCloudVideointelligenceV1beta2VideoContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicitContentDetectionConfig" })
  explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;

  @Metadata({ data: "json, name=faceDetectionConfig" })
  faceDetectionConfig?: GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;

  @Metadata({ data: "json, name=labelDetectionConfig" })
  labelDetectionConfig?: GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;

  @Metadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;

  @Metadata({ data: "json, name=personDetectionConfig" })
  personDetectionConfig?: GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;

  @Metadata({ data: "json, name=segments", elemType: shared.GoogleCloudVideointelligenceV1beta2VideoSegment })
  segments?: GoogleCloudVideointelligenceV1beta2VideoSegment[];

  @Metadata({ data: "json, name=shotChangeDetectionConfig" })
  shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;

  @Metadata({ data: "json, name=speechTranscriptionConfig" })
  speechTranscriptionConfig?: GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;

  @Metadata({ data: "json, name=textDetectionConfig" })
  textDetectionConfig?: GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
}
