package shared

type GoogleCloudVideointelligenceV1p3beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig            `json:"faceDetectionConfig"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig           `json:"labelDetectionConfig"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig           `json:"objectTrackingConfig"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig          `json:"personDetectionConfig"`
	Segments                       []GoogleCloudVideointelligenceV1p3beta1VideoSegment                  `json:"segments"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig            `json:"textDetectionConfig"`
}
