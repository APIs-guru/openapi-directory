package shared

// ListEffectiveTagsResponse
// The response of ListEffectiveTags.
type ListEffectiveTagsResponse struct {
	EffectiveTags []EffectiveTag `json:"effectiveTags,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
