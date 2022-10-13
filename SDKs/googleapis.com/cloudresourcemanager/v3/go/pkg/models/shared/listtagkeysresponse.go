package shared

type ListTagKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	TagKeys       []TagKey `json:"tagKeys"`
}
