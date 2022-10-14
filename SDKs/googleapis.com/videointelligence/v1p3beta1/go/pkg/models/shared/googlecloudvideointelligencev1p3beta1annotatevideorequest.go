package shared

type GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum string

const (
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumFeatureUnspecified       GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumLabelDetection           GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "LABEL_DETECTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumShotChangeDetection      GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "SHOT_CHANGE_DETECTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumExplicitContentDetection GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "EXPLICIT_CONTENT_DETECTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumFaceDetection            GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "FACE_DETECTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumSpeechTranscription      GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "SPEECH_TRANSCRIPTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumTextDetection            GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "TEXT_DETECTION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumObjectTracking           GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "OBJECT_TRACKING"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumLogoRecognition          GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "LOGO_RECOGNITION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumCelebrityRecognition     GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "CELEBRITY_RECOGNITION"
	GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnumPersonDetection          GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum = "PERSON_DETECTION"
)

type GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest struct {
	Features     []GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum `json:"features,omitempty"`
	InputContent *string                                                                 `json:"inputContent,omitempty"`
	InputURI     *string                                                                 `json:"inputUri,omitempty"`
	LocationID   *string                                                                 `json:"locationId,omitempty"`
	OutputURI    *string                                                                 `json:"outputUri,omitempty"`
	VideoContext *GoogleCloudVideointelligenceV1p3beta1VideoContext                      `json:"videoContext,omitempty"`
}
