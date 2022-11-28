package shared

// Name
// 2-letter ISO 639-1 language code for the corresponding item.
type Name struct {
	Dollar         *string `json:"$,omitempty"`
	AtLanguageCode *string `json:"@LanguageCode,omitempty"`
}
