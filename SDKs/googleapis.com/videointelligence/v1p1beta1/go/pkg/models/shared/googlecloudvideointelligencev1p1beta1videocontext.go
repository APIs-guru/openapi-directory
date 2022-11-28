package shared

// GoogleCloudVideointelligenceV1p1beta1VideoContext
// Video context and/or feature-specific parameters.
type GoogleCloudVideointelligenceV1p1beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig,omitempty"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig            `json:"faceDetectionConfig,omitempty"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig           `json:"labelDetectionConfig,omitempty"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig           `json:"objectTrackingConfig,omitempty"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig          `json:"personDetectionConfig,omitempty"`
	Segments                       []GoogleCloudVideointelligenceV1p1beta1VideoSegment                  `json:"segments,omitempty"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig,omitempty"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig,omitempty"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig            `json:"textDetectionConfig,omitempty"`
}
