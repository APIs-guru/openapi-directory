package shared

type ReusableConfig struct {
	CreateTime  *string               `json:"createTime,omitempty"`
	Description *string               `json:"description,omitempty"`
	Labels      map[string]string     `json:"labels,omitempty"`
	Name        *string               `json:"name,omitempty"`
	UpdateTime  *string               `json:"updateTime,omitempty"`
	Values      *ReusableConfigValues `json:"values,omitempty"`
}
