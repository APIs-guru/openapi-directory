package shared

type GoogleCloudVideointelligenceV1p1beta1VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig            `json:"faceDetectionConfig"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig           `json:"labelDetectionConfig"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig           `json:"objectTrackingConfig"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig          `json:"personDetectionConfig"`
	Segments                       []GoogleCloudVideointelligenceV1p1beta1VideoSegment                  `json:"segments"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig      `json:"speechTranscriptionConfig"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig            `json:"textDetectionConfig"`
}
