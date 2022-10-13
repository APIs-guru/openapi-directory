package shared

type PolicyBindings struct {
	Condition *Expr    `json:"condition"`
	Members   []string `json:"members"`
	Role      *string  `json:"role"`
}

type Policy struct {
	Bindings   []PolicyBindings `json:"bindings"`
	Etag       *string          `json:"etag"`
	Kind       *string          `json:"kind"`
	ResourceID *string          `json:"resourceId"`
	Version    *int32           `json:"version"`
}
