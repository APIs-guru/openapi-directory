package shared

type LiveStream struct {
	Cdn            *CdnSettings              `json:"cdn,omitempty"`
	ContentDetails *LiveStreamContentDetails `json:"contentDetails,omitempty"`
	Etag           *string                   `json:"etag,omitempty"`
	ID             *string                   `json:"id,omitempty"`
	Kind           *string                   `json:"kind,omitempty"`
	Snippet        *LiveStreamSnippet        `json:"snippet,omitempty"`
	Status         *LiveStreamStatus         `json:"status,omitempty"`
}
