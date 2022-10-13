package shared

type LiveChatBan struct {
	Etag    *string             `json:"etag"`
	ID      *string             `json:"id"`
	Kind    *string             `json:"kind"`
	Snippet *LiveChatBanSnippet `json:"snippet"`
}
