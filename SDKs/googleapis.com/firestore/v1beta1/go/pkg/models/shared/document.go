package shared

type Document struct {
	CreateTime *string          `json:"createTime"`
	Fields     map[string]Value `json:"fields"`
	Name       *string          `json:"name"`
	UpdateTime *string          `json:"updateTime"`
}
