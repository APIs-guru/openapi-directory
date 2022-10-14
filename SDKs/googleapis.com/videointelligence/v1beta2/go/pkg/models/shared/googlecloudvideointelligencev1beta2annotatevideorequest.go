package shared

type GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum string

const (
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumFeatureUnspecified       GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumLabelDetection           GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "LABEL_DETECTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumShotChangeDetection      GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "SHOT_CHANGE_DETECTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumExplicitContentDetection GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "EXPLICIT_CONTENT_DETECTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumFaceDetection            GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "FACE_DETECTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumSpeechTranscription      GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "SPEECH_TRANSCRIPTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumTextDetection            GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "TEXT_DETECTION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumObjectTracking           GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "OBJECT_TRACKING"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumLogoRecognition          GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "LOGO_RECOGNITION"
	GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnumPersonDetection          GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum = "PERSON_DETECTION"
)

type GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest struct {
	Features     []GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum `json:"features,omitempty"`
	InputContent *string                                                               `json:"inputContent,omitempty"`
	InputURI     *string                                                               `json:"inputUri,omitempty"`
	LocationID   *string                                                               `json:"locationId,omitempty"`
	OutputURI    *string                                                               `json:"outputUri,omitempty"`
	VideoContext *GoogleCloudVideointelligenceV1beta2VideoContext                      `json:"videoContext,omitempty"`
}
