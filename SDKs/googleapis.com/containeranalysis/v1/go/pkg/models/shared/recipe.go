package shared

// Recipe
// Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
type Recipe struct {
	Arguments         []map[string]interface{} `json:"arguments,omitempty"`
	DefinedInMaterial *string                  `json:"definedInMaterial,omitempty"`
	EntryPoint        *string                  `json:"entryPoint,omitempty"`
	Environment       []map[string]interface{} `json:"environment,omitempty"`
	Type              *string                  `json:"type,omitempty"`
}
