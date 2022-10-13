package shared

type GoogleCloudVideointelligenceV1p2beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig            `json:"faceDetectionConfig"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig           `json:"labelDetectionConfig"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig           `json:"objectTrackingConfig"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig          `json:"personDetectionConfig"`
	Segments                       []GoogleCloudVideointelligenceV1p2beta1VideoSegment                  `json:"segments"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig            `json:"textDetectionConfig"`
}
