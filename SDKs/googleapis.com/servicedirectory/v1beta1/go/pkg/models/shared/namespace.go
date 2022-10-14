package shared

type Namespace struct {
	CreateTime *string           `json:"createTime,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Name       *string           `json:"name,omitempty"`
	UpdateTime *string           `json:"updateTime,omitempty"`
}
