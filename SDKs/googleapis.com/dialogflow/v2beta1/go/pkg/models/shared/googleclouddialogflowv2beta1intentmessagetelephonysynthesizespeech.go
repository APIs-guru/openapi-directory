package shared

// GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech
// Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
type GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech struct {
	Ssml *string `json:"ssml,omitempty"`
	Text *string `json:"text,omitempty"`
}
