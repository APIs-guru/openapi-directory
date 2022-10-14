package shared

type ListTagKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TagKeys       []TagKey `json:"tagKeys,omitempty"`
}
