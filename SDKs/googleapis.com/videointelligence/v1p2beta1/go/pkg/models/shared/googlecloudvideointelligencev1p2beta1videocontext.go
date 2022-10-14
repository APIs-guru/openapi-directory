package shared

type GoogleCloudVideointelligenceV1p2beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig,omitempty"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig            `json:"faceDetectionConfig,omitempty"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig           `json:"labelDetectionConfig,omitempty"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig           `json:"objectTrackingConfig,omitempty"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig          `json:"personDetectionConfig,omitempty"`
	Segments                       []GoogleCloudVideointelligenceV1p2beta1VideoSegment                  `json:"segments,omitempty"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig,omitempty"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig,omitempty"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig            `json:"textDetectionConfig,omitempty"`
}
