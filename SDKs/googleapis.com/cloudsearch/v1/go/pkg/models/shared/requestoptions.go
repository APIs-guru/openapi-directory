package shared

type RequestOptions struct {
	DebugOptions        *DebugOptions `json:"debugOptions"`
	LanguageCode        *string       `json:"languageCode"`
	SearchApplicationID *string       `json:"searchApplicationId"`
	TimeZone            *string       `json:"timeZone"`
}
