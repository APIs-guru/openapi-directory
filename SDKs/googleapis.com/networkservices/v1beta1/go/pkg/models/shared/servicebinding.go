package shared

type ServiceBinding struct {
	CreateTime  *string           `json:"createTime"`
	Description *string           `json:"description"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	Service     *string           `json:"service"`
	UpdateTime  *string           `json:"updateTime"`
}
