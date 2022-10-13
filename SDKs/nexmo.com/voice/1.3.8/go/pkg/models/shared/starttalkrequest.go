package shared

type StartTalkRequest struct {
	Language  *LanguageEnum  `json:"language"`
	Level     *string        `json:"level"`
	Loop      *int64         `json:"loop"`
	Style     *int64         `json:"style"`
	Text      string         `json:"text"`
	VoiceName *VoiceNameEnum `json:"voice_name"`
}
