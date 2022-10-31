package shared

type RecognizeResponse struct {
	RequestID       *string                   `json:"requestId,omitempty"`
	Results         []SpeechRecognitionResult `json:"results,omitempty"`
	TotalBilledTime *string                   `json:"totalBilledTime,omitempty"`
}
