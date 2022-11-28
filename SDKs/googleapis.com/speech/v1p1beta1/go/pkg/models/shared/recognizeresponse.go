package shared

// RecognizeResponse
// The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
type RecognizeResponse struct {
	RequestID            *string                   `json:"requestId,omitempty"`
	Results              []SpeechRecognitionResult `json:"results,omitempty"`
	SpeechAdaptationInfo *SpeechAdaptationInfo     `json:"speechAdaptationInfo,omitempty"`
	TotalBilledTime      *string                   `json:"totalBilledTime,omitempty"`
}
