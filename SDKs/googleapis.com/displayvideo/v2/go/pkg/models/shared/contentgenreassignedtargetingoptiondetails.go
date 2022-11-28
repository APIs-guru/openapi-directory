package shared

// ContentGenreAssignedTargetingOptionDetailsInput
// Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
type ContentGenreAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// ContentGenreAssignedTargetingOptionDetails
// Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
type ContentGenreAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
