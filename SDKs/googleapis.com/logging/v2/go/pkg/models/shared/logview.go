package shared

// LogViewInput
// Describes a view over log entries in a bucket.
type LogViewInput struct {
	Description *string `json:"description,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// LogView
// Describes a view over log entries in a bucket.
type LogView struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
