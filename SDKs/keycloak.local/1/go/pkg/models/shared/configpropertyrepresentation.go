package shared

type ConfigPropertyRepresentation struct {
	DefaultValue map[string]interface{} `json:"defaultValue"`
	HelpText     *string                `json:"helpText"`
	Label        *string                `json:"label"`
	Name         *string                `json:"name"`
	Options      []string               `json:"options"`
	Secret       *bool                  `json:"secret"`
	Type         *string                `json:"type"`
}
