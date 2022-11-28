package shared

// StreamObject
// A specific stream object (e.g a specific DB table).
type StreamObject struct {
	BackfillJob  *BackfillJob            `json:"backfillJob,omitempty"`
	CreateTime   *string                 `json:"createTime,omitempty"`
	DisplayName  *string                 `json:"displayName,omitempty"`
	Errors       []Error                 `json:"errors,omitempty"`
	Name         *string                 `json:"name,omitempty"`
	SourceObject *SourceObjectIdentifier `json:"sourceObject,omitempty"`
	UpdateTime   *string                 `json:"updateTime,omitempty"`
}
