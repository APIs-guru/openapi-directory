package shared

// SuperChatEvent
// A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
type SuperChatEvent struct {
	Etag    *string                `json:"etag,omitempty"`
	ID      *string                `json:"id,omitempty"`
	Kind    *string                `json:"kind,omitempty"`
	Snippet *SuperChatEventSnippet `json:"snippet,omitempty"`
}
