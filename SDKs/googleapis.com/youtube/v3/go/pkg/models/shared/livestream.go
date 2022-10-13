package shared

type LiveStream struct {
	Cdn            *CdnSettings              `json:"cdn"`
	ContentDetails *LiveStreamContentDetails `json:"contentDetails"`
	Etag           *string                   `json:"etag"`
	ID             *string                   `json:"id"`
	Kind           *string                   `json:"kind"`
	Snippet        *LiveStreamSnippet        `json:"snippet"`
	Status         *LiveStreamStatus         `json:"status"`
}
