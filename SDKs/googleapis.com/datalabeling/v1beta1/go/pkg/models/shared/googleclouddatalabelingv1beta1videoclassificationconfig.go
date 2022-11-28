package shared

// GoogleCloudDatalabelingV1beta1VideoClassificationConfig
// Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
type GoogleCloudDatalabelingV1beta1VideoClassificationConfig struct {
	AnnotationSpecSetConfigs []GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig `json:"annotationSpecSetConfigs,omitempty"`
	ApplyShotDetection       *bool                                                   `json:"applyShotDetection,omitempty"`
}
