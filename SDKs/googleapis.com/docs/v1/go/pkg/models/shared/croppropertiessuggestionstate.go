package shared

// CropPropertiesSuggestionState
// A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
type CropPropertiesSuggestionState struct {
	AngleSuggested        *bool `json:"angleSuggested,omitempty"`
	OffsetBottomSuggested *bool `json:"offsetBottomSuggested,omitempty"`
	OffsetLeftSuggested   *bool `json:"offsetLeftSuggested,omitempty"`
	OffsetRightSuggested  *bool `json:"offsetRightSuggested,omitempty"`
	OffsetTopSuggested    *bool `json:"offsetTopSuggested,omitempty"`
}
