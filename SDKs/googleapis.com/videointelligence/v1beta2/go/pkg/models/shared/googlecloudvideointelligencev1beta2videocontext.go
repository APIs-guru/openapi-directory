package shared

type GoogleCloudVideointelligenceV1beta2VideoContext struct {
	ExplicitContentDetectionConfig *GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig `json:"explicitContentDetectionConfig"`
	FaceDetectionConfig            *GoogleCloudVideointelligenceV1beta2FaceDetectionConfig            `json:"faceDetectionConfig"`
	LabelDetectionConfig           *GoogleCloudVideointelligenceV1beta2LabelDetectionConfig           `json:"labelDetectionConfig"`
	ObjectTrackingConfig           *GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig           `json:"objectTrackingConfig"`
	PersonDetectionConfig          *GoogleCloudVideointelligenceV1beta2PersonDetectionConfig          `json:"personDetectionConfig"`
	Segments                       []GoogleCloudVideointelligenceV1beta2VideoSegment                  `json:"segments"`
	ShotChangeDetectionConfig      *GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig      `json:"shotChangeDetectionConfig"`
	SpeechTranscriptionConfig      *GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig      `json:"speechTranscriptionConfig"`
	TextDetectionConfig            *GoogleCloudVideointelligenceV1beta2TextDetectionConfig            `json:"textDetectionConfig"`
}
