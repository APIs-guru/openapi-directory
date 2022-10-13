package shared

type Mesh struct {
	CreateTime       *string           `json:"createTime"`
	Description      *string           `json:"description"`
	InterceptionPort *int32            `json:"interceptionPort"`
	Labels           map[string]string `json:"labels"`
	Name             *string           `json:"name"`
	SelfLink         *string           `json:"selfLink"`
	UpdateTime       *string           `json:"updateTime"`
}
