package shared

// GoogleCloudVideointelligenceV1VideoContext
// Video context and/or feature-specific parameters.
type GoogleCloudVideointelligenceV1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig,omitempty"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1FaceDetectionConfig            `json:"faceDetectionConfig,omitempty"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1LabelDetectionConfig           `json:"labelDetectionConfig,omitempty"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1ObjectTrackingConfig           `json:"objectTrackingConfig,omitempty"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1PersonDetectionConfig          `json:"personDetectionConfig,omitempty"`
	Segments                       []GoogleCloudVideointelligenceV1VideoSegment                  `json:"segments,omitempty"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig,omitempty"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig,omitempty"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1TextDetectionConfig            `json:"textDetectionConfig,omitempty"`
}
