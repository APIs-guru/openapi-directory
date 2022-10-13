package shared

type PlaylistItem struct {
	ContentDetails *PlaylistItemContentDetails `json:"contentDetails"`
	Etag           *string                     `json:"etag"`
	ID             *string                     `json:"id"`
	Kind           *string                     `json:"kind"`
	Snippet        *PlaylistItemSnippet        `json:"snippet"`
	Status         *PlaylistItemStatus         `json:"status"`
}
