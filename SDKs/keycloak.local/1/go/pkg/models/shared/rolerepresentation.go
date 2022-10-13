package shared

type RoleRepresentation struct {
	Attributes  map[string]interface{}        `json:"attributes"`
	ClientRole  *bool                         `json:"clientRole"`
	Composite   *bool                         `json:"composite"`
	Composites  *RoleRepresentationComposites `json:"composites"`
	ContainerID *string                       `json:"containerId"`
	Description *string                       `json:"description"`
	ID          *string                       `json:"id"`
	Name        *string                       `json:"name"`
}
