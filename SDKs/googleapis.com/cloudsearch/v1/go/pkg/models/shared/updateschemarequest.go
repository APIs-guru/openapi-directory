package shared

type UpdateSchemaRequest struct {
	DebugOptions *DebugOptions `json:"debugOptions"`
	Schema       *Schema       `json:"schema"`
	ValidateOnly *bool         `json:"validateOnly"`
}
