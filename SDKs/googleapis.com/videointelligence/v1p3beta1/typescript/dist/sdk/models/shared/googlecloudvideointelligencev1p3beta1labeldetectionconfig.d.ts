import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum {
    LabelDetectionModeUnspecified = "LABEL_DETECTION_MODE_UNSPECIFIED",
    ShotMode = "SHOT_MODE",
    FrameMode = "FRAME_MODE",
    ShotAndFrameMode = "SHOT_AND_FRAME_MODE"
}
/**
 * Config for LABEL_DETECTION.
**/
export declare class GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig extends SpeakeasyBase {
    frameConfidenceThreshold?: number;
    labelDetectionMode?: GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum;
    model?: string;
    stationaryCamera?: boolean;
    videoConfidenceThreshold?: number;
}
