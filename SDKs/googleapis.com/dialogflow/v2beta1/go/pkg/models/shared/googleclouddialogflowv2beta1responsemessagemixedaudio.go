package shared

// GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio
// Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
type GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio struct {
	Segments []GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment `json:"segments,omitempty"`
}
