package shared

type EmbeddedObjectSuggestionState struct {
	DescriptionSuggested                     *bool                                  `json:"descriptionSuggested,omitempty"`
	EmbeddedDrawingPropertiesSuggestionState map[string]interface{}                 `json:"embeddedDrawingPropertiesSuggestionState,omitempty"`
	EmbeddedObjectBorderSuggestionState      *EmbeddedObjectBorderSuggestionState   `json:"embeddedObjectBorderSuggestionState,omitempty"`
	ImagePropertiesSuggestionState           *ImagePropertiesSuggestionState        `json:"imagePropertiesSuggestionState,omitempty"`
	LinkedContentReferenceSuggestionState    *LinkedContentReferenceSuggestionState `json:"linkedContentReferenceSuggestionState,omitempty"`
	MarginBottomSuggested                    *bool                                  `json:"marginBottomSuggested,omitempty"`
	MarginLeftSuggested                      *bool                                  `json:"marginLeftSuggested,omitempty"`
	MarginRightSuggested                     *bool                                  `json:"marginRightSuggested,omitempty"`
	MarginTopSuggested                       *bool                                  `json:"marginTopSuggested,omitempty"`
	SizeSuggestionState                      *SizeSuggestionState                   `json:"sizeSuggestionState,omitempty"`
	TitleSuggested                           *bool                                  `json:"titleSuggested,omitempty"`
}
