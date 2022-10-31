package shared

type LiveChatModerator struct {
	Etag    *string                   `json:"etag,omitempty"`
	ID      *string                   `json:"id,omitempty"`
	Kind    *string                   `json:"kind,omitempty"`
	Snippet *LiveChatModeratorSnippet `json:"snippet,omitempty"`
}
