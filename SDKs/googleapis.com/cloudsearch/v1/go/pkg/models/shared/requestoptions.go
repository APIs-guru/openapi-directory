package shared

type RequestOptions struct {
	DebugOptions        *DebugOptions `json:"debugOptions,omitempty"`
	LanguageCode        *string       `json:"languageCode,omitempty"`
	SearchApplicationID *string       `json:"searchApplicationId,omitempty"`
	TimeZone            *string       `json:"timeZone,omitempty"`
}
