package shared

type ComponentTypeRepresentation struct {
	HelpText   *string                        `json:"helpText,omitempty"`
	ID         *string                        `json:"id,omitempty"`
	Metadata   map[string]interface{}         `json:"metadata,omitempty"`
	Properties []ConfigPropertyRepresentation `json:"properties,omitempty"`
}
