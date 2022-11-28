package shared

type GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum string

const (
	GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnumLabelDetectionModeUnspecified GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum = "LABEL_DETECTION_MODE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnumShotMode                      GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_MODE"
	GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnumFrameMode                     GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum = "FRAME_MODE"
	GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode              GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_AND_FRAME_MODE"
)

// GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig
// Config for LABEL_DETECTION.
type GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig struct {
	FrameConfidenceThreshold *float32                                                                         `json:"frameConfidenceThreshold,omitempty"`
	LabelDetectionMode       *GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum `json:"labelDetectionMode,omitempty"`
	Model                    *string                                                                          `json:"model,omitempty"`
	StationaryCamera         *bool                                                                            `json:"stationaryCamera,omitempty"`
	VideoConfidenceThreshold *float32                                                                         `json:"videoConfidenceThreshold,omitempty"`
}
