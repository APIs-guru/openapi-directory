package shared

type StreamObject struct {
	BackfillJob  *BackfillJob            `json:"backfillJob,omitempty"`
	CreateTime   *string                 `json:"createTime,omitempty"`
	DisplayName  *string                 `json:"displayName,omitempty"`
	Errors       []Error                 `json:"errors,omitempty"`
	Name         *string                 `json:"name,omitempty"`
	SourceObject *SourceObjectIdentifier `json:"sourceObject,omitempty"`
	UpdateTime   *string                 `json:"updateTime,omitempty"`
}
