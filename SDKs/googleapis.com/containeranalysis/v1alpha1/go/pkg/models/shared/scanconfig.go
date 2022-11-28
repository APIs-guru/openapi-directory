package shared

// ScanConfig
// Indicates various scans and whether they are turned on or off.
type ScanConfig struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled     *bool   `json:"enabled,omitempty"`
	Name        *string `json:"name,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
