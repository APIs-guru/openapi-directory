package shared

// LogExclusion
// Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it.
type LogExclusion struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	Disabled    *bool   `json:"disabled,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}

// LogExclusionInput
// Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it.
type LogExclusionInput struct {
	Description *string `json:"description,omitempty"`
	Disabled    *bool   `json:"disabled,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
}
