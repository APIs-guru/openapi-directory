package shared

type ScanConfig struct {
	CreateTime  *string `json:"createTime"`
	Description *string `json:"description"`
	Enabled     *bool   `json:"enabled"`
	Name        *string `json:"name"`
	UpdateTime  *string `json:"updateTime"`
}
