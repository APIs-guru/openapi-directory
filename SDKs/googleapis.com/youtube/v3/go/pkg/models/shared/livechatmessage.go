package shared

type LiveChatMessage struct {
	AuthorDetails *LiveChatMessageAuthorDetails `json:"authorDetails"`
	Etag          *string                       `json:"etag"`
	ID            *string                       `json:"id"`
	Kind          *string                       `json:"kind"`
	Snippet       *LiveChatMessageSnippet       `json:"snippet"`
}
