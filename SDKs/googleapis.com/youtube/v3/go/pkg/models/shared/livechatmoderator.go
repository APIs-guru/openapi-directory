package shared

type LiveChatModerator struct {
	Etag    *string                   `json:"etag"`
	ID      *string                   `json:"id"`
	Kind    *string                   `json:"kind"`
	Snippet *LiveChatModeratorSnippet `json:"snippet"`
}
