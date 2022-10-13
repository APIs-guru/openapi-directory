package shared

type StreamObject struct {
	BackfillJob  *BackfillJob            `json:"backfillJob"`
	CreateTime   *string                 `json:"createTime"`
	DisplayName  *string                 `json:"displayName"`
	Errors       []Error                 `json:"errors"`
	Name         *string                 `json:"name"`
	SourceObject *SourceObjectIdentifier `json:"sourceObject"`
	UpdateTime   *string                 `json:"updateTime"`
}
