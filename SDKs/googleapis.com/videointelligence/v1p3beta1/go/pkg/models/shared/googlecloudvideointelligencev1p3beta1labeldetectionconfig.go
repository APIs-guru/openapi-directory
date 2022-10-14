package shared

type GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum string

const (
	GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnumLabelDetectionModeUnspecified GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum = "LABEL_DETECTION_MODE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnumShotMode                      GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_MODE"
	GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnumFrameMode                     GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum = "FRAME_MODE"
	GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode              GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_AND_FRAME_MODE"
)

type GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig struct {
	FrameConfidenceThreshold *float32                                                                         `json:"frameConfidenceThreshold,omitempty"`
	LabelDetectionMode       *GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum `json:"labelDetectionMode,omitempty"`
	Model                    *string                                                                          `json:"model,omitempty"`
	StationaryCamera         *bool                                                                            `json:"stationaryCamera,omitempty"`
	VideoConfidenceThreshold *float32                                                                         `json:"videoConfidenceThreshold,omitempty"`
}
