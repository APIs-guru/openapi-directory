package shared

type GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum string

const (
	GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnumLabelDetectionModeUnspecified GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = "LABEL_DETECTION_MODE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnumShotMode                      GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = "SHOT_MODE"
	GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnumFrameMode                     GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = "FRAME_MODE"
	GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode              GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum = "SHOT_AND_FRAME_MODE"
)

type GoogleCloudVideointelligenceV1beta2LabelDetectionConfig struct {
	FrameConfidenceThreshold *float32                                                                       `json:"frameConfidenceThreshold,omitempty"`
	LabelDetectionMode       *GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum `json:"labelDetectionMode,omitempty"`
	Model                    *string                                                                        `json:"model,omitempty"`
	StationaryCamera         *bool                                                                          `json:"stationaryCamera,omitempty"`
	VideoConfidenceThreshold *float32                                                                       `json:"videoConfidenceThreshold,omitempty"`
}
