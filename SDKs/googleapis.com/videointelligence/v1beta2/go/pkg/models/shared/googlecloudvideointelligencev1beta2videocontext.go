package shared

type GoogleCloudVideointelligenceV1beta2VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig,omitempty"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1beta2FaceDetectionConfig            `json:"faceDetectionConfig,omitempty"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1beta2LabelDetectionConfig           `json:"labelDetectionConfig,omitempty"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig           `json:"objectTrackingConfig,omitempty"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1beta2PersonDetectionConfig          `json:"personDetectionConfig,omitempty"`
	Segments                       []GoogleCloudVideointelligenceV1beta2VideoSegment                  `json:"segments,omitempty"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig,omitempty"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig      `json:"speechTranscriptionConfig,omitempty"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1beta2TextDetectionConfig            `json:"textDetectionConfig,omitempty"`
}
