package shared

type GoogleCloudVideointelligenceV1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1FaceDetectionConfig            `json:"faceDetectionConfig"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1LabelDetectionConfig           `json:"labelDetectionConfig"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1ObjectTrackingConfig           `json:"objectTrackingConfig"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1PersonDetectionConfig          `json:"personDetectionConfig"`
	Segments                       []GoogleCloudVideointelligenceV1VideoSegment                  `json:"segments"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1TextDetectionConfig            `json:"textDetectionConfig"`
}
