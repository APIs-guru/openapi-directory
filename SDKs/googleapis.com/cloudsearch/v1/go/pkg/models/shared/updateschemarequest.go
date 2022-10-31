package shared

type UpdateSchemaRequest struct {
	DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
	Schema       *Schema       `json:"schema,omitempty"`
	ValidateOnly *bool         `json:"validateOnly,omitempty"`
}
