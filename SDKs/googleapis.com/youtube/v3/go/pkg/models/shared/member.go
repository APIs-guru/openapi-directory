package shared

type Member struct {
	Etag    *string        `json:"etag"`
	Kind    *string        `json:"kind"`
	Snippet *MemberSnippet `json:"snippet"`
}
