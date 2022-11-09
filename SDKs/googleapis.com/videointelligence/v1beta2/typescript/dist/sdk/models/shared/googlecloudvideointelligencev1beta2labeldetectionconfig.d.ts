import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum {
    LabelDetectionModeUnspecified = "LABEL_DETECTION_MODE_UNSPECIFIED",
    ShotMode = "SHOT_MODE",
    FrameMode = "FRAME_MODE",
    ShotAndFrameMode = "SHOT_AND_FRAME_MODE"
}
/**
 * Config for LABEL_DETECTION.
**/
export declare class GoogleCloudVideointelligenceV1beta2LabelDetectionConfig extends SpeakeasyBase {
    frameConfidenceThreshold?: number;
    labelDetectionMode?: GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;
    model?: string;
    stationaryCamera?: boolean;
    videoConfidenceThreshold?: number;
}
