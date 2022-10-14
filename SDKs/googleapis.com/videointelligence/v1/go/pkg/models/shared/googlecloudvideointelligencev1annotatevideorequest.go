package shared

type GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum string

const (
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumFeatureUnspecified       GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumLabelDetection           GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "LABEL_DETECTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumShotChangeDetection      GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "SHOT_CHANGE_DETECTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumExplicitContentDetection GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "EXPLICIT_CONTENT_DETECTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumFaceDetection            GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "FACE_DETECTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumSpeechTranscription      GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "SPEECH_TRANSCRIPTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumTextDetection            GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "TEXT_DETECTION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumObjectTracking           GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "OBJECT_TRACKING"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumLogoRecognition          GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "LOGO_RECOGNITION"
	GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnumPersonDetection          GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum = "PERSON_DETECTION"
)

type GoogleCloudVideointelligenceV1AnnotateVideoRequest struct {
	Features     []GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum `json:"features,omitempty"`
	InputContent *string                                                          `json:"inputContent,omitempty"`
	InputURI     *string                                                          `json:"inputUri,omitempty"`
	LocationID   *string                                                          `json:"locationId,omitempty"`
	OutputURI    *string                                                          `json:"outputUri,omitempty"`
	VideoContext *GoogleCloudVideointelligenceV1VideoContext                      `json:"videoContext,omitempty"`
}
