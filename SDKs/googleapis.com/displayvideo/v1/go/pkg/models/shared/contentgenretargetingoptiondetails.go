package shared

// ContentGenreTargetingOptionDetails
// Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
type ContentGenreTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
