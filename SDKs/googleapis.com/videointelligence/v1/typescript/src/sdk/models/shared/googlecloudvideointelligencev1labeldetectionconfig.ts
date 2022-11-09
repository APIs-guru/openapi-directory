import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum {
    LabelDetectionModeUnspecified = "LABEL_DETECTION_MODE_UNSPECIFIED"
,    ShotMode = "SHOT_MODE"
,    FrameMode = "FRAME_MODE"
,    ShotAndFrameMode = "SHOT_AND_FRAME_MODE"
}


// GoogleCloudVideointelligenceV1LabelDetectionConfig
/** 
 * Config for LABEL_DETECTION.
**/
export class GoogleCloudVideointelligenceV1LabelDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameConfidenceThreshold" })
  frameConfidenceThreshold?: number;

  @Metadata({ data: "json, name=labelDetectionMode" })
  labelDetectionMode?: GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=stationaryCamera" })
  stationaryCamera?: boolean;

  @Metadata({ data: "json, name=videoConfidenceThreshold" })
  videoConfidenceThreshold?: number;
}
