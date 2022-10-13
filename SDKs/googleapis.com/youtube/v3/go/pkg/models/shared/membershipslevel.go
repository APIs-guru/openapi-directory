package shared

type MembershipsLevel struct {
	Etag    *string                  `json:"etag"`
	ID      *string                  `json:"id"`
	Kind    *string                  `json:"kind"`
	Snippet *MembershipsLevelSnippet `json:"snippet"`
}
