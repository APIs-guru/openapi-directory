package shared

type ListEffectiveTagsResponse struct {
	EffectiveTags []EffectiveTag `json:"effectiveTags"`
	NextPageToken *string        `json:"nextPageToken"`
}
