package shared

type Member struct {
	Etag    *string        `json:"etag,omitempty"`
	Kind    *string        `json:"kind,omitempty"`
	Snippet *MemberSnippet `json:"snippet,omitempty"`
}
