package shared

type CropPropertiesSuggestionState struct {
	AngleSuggested        *bool `json:"angleSuggested"`
	OffsetBottomSuggested *bool `json:"offsetBottomSuggested"`
	OffsetLeftSuggested   *bool `json:"offsetLeftSuggested"`
	OffsetRightSuggested  *bool `json:"offsetRightSuggested"`
	OffsetTopSuggested    *bool `json:"offsetTopSuggested"`
}
