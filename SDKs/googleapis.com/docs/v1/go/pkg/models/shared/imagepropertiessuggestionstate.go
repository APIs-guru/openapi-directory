package shared

// ImagePropertiesSuggestionState
// A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
type ImagePropertiesSuggestionState struct {
	AngleSuggested                *bool                          `json:"angleSuggested,omitempty"`
	BrightnessSuggested           *bool                          `json:"brightnessSuggested,omitempty"`
	ContentURISuggested           *bool                          `json:"contentUriSuggested,omitempty"`
	ContrastSuggested             *bool                          `json:"contrastSuggested,omitempty"`
	CropPropertiesSuggestionState *CropPropertiesSuggestionState `json:"cropPropertiesSuggestionState,omitempty"`
	SourceURISuggested            *bool                          `json:"sourceUriSuggested,omitempty"`
	TransparencySuggested         *bool                          `json:"transparencySuggested,omitempty"`
}
