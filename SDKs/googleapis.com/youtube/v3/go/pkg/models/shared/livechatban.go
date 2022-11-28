package shared

// LiveChatBan
// A `__liveChatBan__` resource represents a ban for a YouTube live chat.
type LiveChatBan struct {
	Etag    *string             `json:"etag,omitempty"`
	ID      *string             `json:"id,omitempty"`
	Kind    *string             `json:"kind,omitempty"`
	Snippet *LiveChatBanSnippet `json:"snippet,omitempty"`
}
