package shared

type Namespace struct {
	CreateTime *string           `json:"createTime"`
	Labels     map[string]string `json:"labels"`
	Name       *string           `json:"name"`
	UpdateTime *string           `json:"updateTime"`
}
