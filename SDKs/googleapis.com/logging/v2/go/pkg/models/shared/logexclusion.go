package shared

type LogExclusion struct {
	CreateTime  *string `json:"createTime"`
	Description *string `json:"description"`
	Disabled    *bool   `json:"disabled"`
	Filter      *string `json:"filter"`
	Name        *string `json:"name"`
	UpdateTime  *string `json:"updateTime"`
}
