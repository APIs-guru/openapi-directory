package shared



type Ownednumber struct {
    Country *string `json:"country,omitempty"`
    Features []string `json:"features,omitempty"`
    MessagesCallbackType *string `json:"messagesCallbackType,omitempty"`
    MessagesCallbackValue *string `json:"messagesCallbackValue,omitempty"`
    MoHTTPURL *string `json:"moHttpUrl,omitempty"`
    Msisdn *string `json:"msisdn,omitempty"`
    Type *string `json:"type,omitempty"`
    VoiceCallbackType *string `json:"voiceCallbackType,omitempty"`
    VoiceCallbackValue *string `json:"voiceCallbackValue,omitempty"`
    
}

