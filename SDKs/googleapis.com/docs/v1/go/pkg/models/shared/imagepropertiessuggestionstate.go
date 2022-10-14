package shared

type ImagePropertiesSuggestionState struct {
	AngleSuggested                *bool                          `json:"angleSuggested,omitempty"`
	BrightnessSuggested           *bool                          `json:"brightnessSuggested,omitempty"`
	ContentURISuggested           *bool                          `json:"contentUriSuggested,omitempty"`
	ContrastSuggested             *bool                          `json:"contrastSuggested,omitempty"`
	CropPropertiesSuggestionState *CropPropertiesSuggestionState `json:"cropPropertiesSuggestionState,omitempty"`
	SourceURISuggested            *bool                          `json:"sourceUriSuggested,omitempty"`
	TransparencySuggested         *bool                          `json:"transparencySuggested,omitempty"`
}
