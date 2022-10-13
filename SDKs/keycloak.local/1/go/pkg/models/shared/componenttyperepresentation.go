package shared

type ComponentTypeRepresentation struct {
	HelpText   *string                        `json:"helpText"`
	ID         *string                        `json:"id"`
	Metadata   map[string]interface{}         `json:"metadata"`
	Properties []ConfigPropertyRepresentation `json:"properties"`
}
