package shared

type RoleRepresentation struct {
	Attributes  map[string]interface{}        `json:"attributes,omitempty"`
	ClientRole  *bool                         `json:"clientRole,omitempty"`
	Composite   *bool                         `json:"composite,omitempty"`
	Composites  *RoleRepresentationComposites `json:"composites,omitempty"`
	ContainerID *string                       `json:"containerId,omitempty"`
	Description *string                       `json:"description,omitempty"`
	ID          *string                       `json:"id,omitempty"`
	Name        *string                       `json:"name,omitempty"`
}
