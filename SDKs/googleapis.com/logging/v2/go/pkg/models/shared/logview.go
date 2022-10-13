package shared

type LogView struct {
	CreateTime  *string `json:"createTime"`
	Description *string `json:"description"`
	Filter      *string `json:"filter"`
	Name        *string `json:"name"`
	UpdateTime  *string `json:"updateTime"`
}
