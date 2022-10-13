package shared

type SuperChatEvent struct {
	Etag    *string                `json:"etag"`
	ID      *string                `json:"id"`
	Kind    *string                `json:"kind"`
	Snippet *SuperChatEventSnippet `json:"snippet"`
}
