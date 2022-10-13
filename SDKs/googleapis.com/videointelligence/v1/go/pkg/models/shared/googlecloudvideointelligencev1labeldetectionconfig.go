package shared

type GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum string

const (
	GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnumLabelDetectionModeUnspecified GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum = "LABEL_DETECTION_MODE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnumShotMode                      GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_MODE"
	GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnumFrameMode                     GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum = "FRAME_MODE"
	GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode              GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_AND_FRAME_MODE"
)

type GoogleCloudVideointelligenceV1LabelDetectionConfig struct {
	FrameConfidenceThreshold *float32                                                                  `json:"frameConfidenceThreshold"`
	LabelDetectionMode       *GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum `json:"labelDetectionMode"`
	Model                    *string                                                                   `json:"model"`
	StationaryCamera         *bool                                                                     `json:"stationaryCamera"`
	VideoConfidenceThreshold *float32                                                                  `json:"videoConfidenceThreshold"`
}
