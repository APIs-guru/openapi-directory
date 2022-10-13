package shared

type GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum string

const (
	GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnumLabelDetectionModeUnspecified GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum = "LABEL_DETECTION_MODE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnumShotMode                      GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_MODE"
	GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnumFrameMode                     GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum = "FRAME_MODE"
	GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnumShotAndFrameMode              GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum = "SHOT_AND_FRAME_MODE"
)

type GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig struct {
	FrameConfidenceThreshold *float32                                                                         `json:"frameConfidenceThreshold"`
	LabelDetectionMode       *GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfigLabelDetectionModeEnum `json:"labelDetectionMode"`
	Model                    *string                                                                          `json:"model"`
	StationaryCamera         *bool                                                                            `json:"stationaryCamera"`
	VideoConfidenceThreshold *float32                                                                         `json:"videoConfidenceThreshold"`
}
