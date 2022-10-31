package shared

type SizeSuggestionState struct {
	HeightSuggested *bool `json:"heightSuggested,omitempty"`
	WidthSuggested  *bool `json:"widthSuggested,omitempty"`
}
