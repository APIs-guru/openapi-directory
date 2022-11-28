package shared

// LiveChatModerator
// A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
type LiveChatModerator struct {
	Etag    *string                   `json:"etag,omitempty"`
	ID      *string                   `json:"id,omitempty"`
	Kind    *string                   `json:"kind,omitempty"`
	Snippet *LiveChatModeratorSnippet `json:"snippet,omitempty"`
}
