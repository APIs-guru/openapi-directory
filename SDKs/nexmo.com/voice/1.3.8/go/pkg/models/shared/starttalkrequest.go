package shared



type StartTalkRequest struct {
    Language *LanguageEnum `json:"language,omitempty"`
    Level *string `json:"level,omitempty"`
    Loop *int64 `json:"loop,omitempty"`
    Style *int64 `json:"style,omitempty"`
    Text string `json:"text"`
    VoiceName *VoiceNameEnum `json:"voice_name,omitempty"`
    
}

