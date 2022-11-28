package shared

type GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum string

const (
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumFeatureUnspecified       GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumLabelDetection           GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "LABEL_DETECTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumShotChangeDetection      GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "SHOT_CHANGE_DETECTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumExplicitContentDetection GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "EXPLICIT_CONTENT_DETECTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumFaceDetection            GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "FACE_DETECTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumSpeechTranscription      GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "SPEECH_TRANSCRIPTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumTextDetection            GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "TEXT_DETECTION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumObjectTracking           GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "OBJECT_TRACKING"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumLogoRecognition          GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "LOGO_RECOGNITION"
	GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnumPersonDetection          GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum = "PERSON_DETECTION"
)

// GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest
// Video annotation request.
type GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest struct {
	Features     []GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum `json:"features,omitempty"`
	InputContent *string                                                                 `json:"inputContent,omitempty"`
	InputURI     *string                                                                 `json:"inputUri,omitempty"`
	LocationID   *string                                                                 `json:"locationId,omitempty"`
	OutputURI    *string                                                                 `json:"outputUri,omitempty"`
	VideoContext *GoogleCloudVideointelligenceV1p2beta1VideoContext                      `json:"videoContext,omitempty"`
}
