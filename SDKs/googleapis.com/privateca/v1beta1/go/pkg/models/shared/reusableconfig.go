package shared

type ReusableConfig struct {
	CreateTime  *string               `json:"createTime"`
	Description *string               `json:"description"`
	Labels      map[string]string     `json:"labels"`
	Name        *string               `json:"name"`
	UpdateTime  *string               `json:"updateTime"`
	Values      *ReusableConfigValues `json:"values"`
}
