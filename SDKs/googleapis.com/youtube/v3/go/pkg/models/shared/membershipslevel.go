package shared

type MembershipsLevel struct {
	Etag    *string                  `json:"etag,omitempty"`
	ID      *string                  `json:"id,omitempty"`
	Kind    *string                  `json:"kind,omitempty"`
	Snippet *MembershipsLevelSnippet `json:"snippet,omitempty"`
}
