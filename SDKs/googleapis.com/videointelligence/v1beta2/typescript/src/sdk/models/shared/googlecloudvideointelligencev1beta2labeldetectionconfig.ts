import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum {
    LabelDetectionModeUnspecified = "LABEL_DETECTION_MODE_UNSPECIFIED",
    ShotMode = "SHOT_MODE",
    FrameMode = "FRAME_MODE",
    ShotAndFrameMode = "SHOT_AND_FRAME_MODE"
}


// GoogleCloudVideointelligenceV1beta2LabelDetectionConfig
/** 
 * Config for LABEL_DETECTION.
**/
export class GoogleCloudVideointelligenceV1beta2LabelDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameConfidenceThreshold" })
  frameConfidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=labelDetectionMode" })
  labelDetectionMode?: GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=stationaryCamera" })
  stationaryCamera?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videoConfidenceThreshold" })
  videoConfidenceThreshold?: number;
}
