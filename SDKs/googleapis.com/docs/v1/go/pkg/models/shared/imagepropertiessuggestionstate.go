package shared

type ImagePropertiesSuggestionState struct {
	AngleSuggested                *bool                          `json:"angleSuggested"`
	BrightnessSuggested           *bool                          `json:"brightnessSuggested"`
	ContentURISuggested           *bool                          `json:"contentUriSuggested"`
	ContrastSuggested             *bool                          `json:"contrastSuggested"`
	CropPropertiesSuggestionState *CropPropertiesSuggestionState `json:"cropPropertiesSuggestionState"`
	SourceURISuggested            *bool                          `json:"sourceUriSuggested"`
	TransparencySuggested         *bool                          `json:"transparencySuggested"`
}
