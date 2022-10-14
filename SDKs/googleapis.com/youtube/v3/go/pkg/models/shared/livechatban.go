package shared

type LiveChatBan struct {
	Etag    *string             `json:"etag,omitempty"`
	ID      *string             `json:"id,omitempty"`
	Kind    *string             `json:"kind,omitempty"`
	Snippet *LiveChatBanSnippet `json:"snippet,omitempty"`
}
