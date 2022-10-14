package shared

type ConfigManagementGroupVersionKind struct {
	Group   *string `json:"group,omitempty"`
	Kind    *string `json:"kind,omitempty"`
	Version *string `json:"version,omitempty"`
}
