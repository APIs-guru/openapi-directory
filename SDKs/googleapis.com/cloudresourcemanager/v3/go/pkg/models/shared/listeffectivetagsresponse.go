package shared

type ListEffectiveTagsResponse struct {
	EffectiveTags []EffectiveTag `json:"effectiveTags,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
