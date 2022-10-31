package shared

type PolicyBindings struct {
	Condition *Expr    `json:"condition,omitempty"`
	Members   []string `json:"members,omitempty"`
	Role      *string  `json:"role,omitempty"`
}

type Policy struct {
	Bindings   []PolicyBindings `json:"bindings,omitempty"`
	Etag       *string          `json:"etag,omitempty"`
	Kind       *string          `json:"kind,omitempty"`
	ResourceID *string          `json:"resourceId,omitempty"`
	Version    *int32           `json:"version,omitempty"`
}
