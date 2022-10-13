package shared

type Target struct {
	Documents   *DocumentsTarget `json:"documents"`
	Once        *bool            `json:"once"`
	Query       *QueryTarget     `json:"query"`
	ReadTime    *string          `json:"readTime"`
	ResumeToken *string          `json:"resumeToken"`
	TargetID    *int32           `json:"targetId"`
}
