package shared

// ListTagKeysResponse
// The ListTagKeys response message.
type ListTagKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TagKeys       []TagKey `json:"tagKeys,omitempty"`
}
