package shared

// GoogleCloudVideointelligenceV1p3beta1VideoContext
// Video context and/or feature-specific parameters.
type GoogleCloudVideointelligenceV1p3beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig,omitempty"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig            `json:"faceDetectionConfig,omitempty"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig           `json:"labelDetectionConfig,omitempty"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig           `json:"objectTrackingConfig,omitempty"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig          `json:"personDetectionConfig,omitempty"`
	Segments                       []GoogleCloudVideointelligenceV1p3beta1VideoSegment                  `json:"segments,omitempty"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig,omitempty"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig,omitempty"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig            `json:"textDetectionConfig,omitempty"`
}
