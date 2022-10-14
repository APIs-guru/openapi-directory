package shared

type Recipe struct {
	Arguments         []map[string]interface{} `json:"arguments,omitempty"`
	DefinedInMaterial *string                  `json:"definedInMaterial,omitempty"`
	EntryPoint        *string                  `json:"entryPoint,omitempty"`
	Environment       []map[string]interface{} `json:"environment,omitempty"`
	Type              *string                  `json:"type,omitempty"`
}
