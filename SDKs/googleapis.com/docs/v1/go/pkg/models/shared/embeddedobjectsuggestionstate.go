package shared

type EmbeddedObjectSuggestionState struct {
	DescriptionSuggested                     *bool                                  `json:"descriptionSuggested"`
	EmbeddedDrawingPropertiesSuggestionState map[string]interface{}                 `json:"embeddedDrawingPropertiesSuggestionState"`
	EmbeddedObjectBorderSuggestionState      *EmbeddedObjectBorderSuggestionState   `json:"embeddedObjectBorderSuggestionState"`
	ImagePropertiesSuggestionState           *ImagePropertiesSuggestionState        `json:"imagePropertiesSuggestionState"`
	LinkedContentReferenceSuggestionState    *LinkedContentReferenceSuggestionState `json:"linkedContentReferenceSuggestionState"`
	MarginBottomSuggested                    *bool                                  `json:"marginBottomSuggested"`
	MarginLeftSuggested                      *bool                                  `json:"marginLeftSuggested"`
	MarginRightSuggested                     *bool                                  `json:"marginRightSuggested"`
	MarginTopSuggested                       *bool                                  `json:"marginTopSuggested"`
	SizeSuggestionState                      *SizeSuggestionState                   `json:"sizeSuggestionState"`
	TitleSuggested                           *bool                                  `json:"titleSuggested"`
}
