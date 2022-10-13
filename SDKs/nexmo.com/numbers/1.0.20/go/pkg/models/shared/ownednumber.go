package shared

type Ownednumber struct {
	Country               *string  `json:"country"`
	Features              []string `json:"features"`
	MessagesCallbackType  *string  `json:"messagesCallbackType"`
	MessagesCallbackValue *string  `json:"messagesCallbackValue"`
	MoHTTPURL             *string  `json:"moHttpUrl"`
	Msisdn                *string  `json:"msisdn"`
	Type                  *string  `json:"type"`
	VoiceCallbackType     *string  `json:"voiceCallbackType"`
	VoiceCallbackValue    *string  `json:"voiceCallbackValue"`
}
