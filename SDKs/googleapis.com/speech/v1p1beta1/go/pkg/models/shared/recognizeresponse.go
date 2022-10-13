package shared

type RecognizeResponse struct {
	RequestID       *string                   `json:"requestId"`
	Results         []SpeechRecognitionResult `json:"results"`
	TotalBilledTime *string                   `json:"totalBilledTime"`
}
