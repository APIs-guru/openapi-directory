package shared

type SlsaRecipe struct {
	Arguments         map[string]interface{} `json:"arguments"`
	DefinedInMaterial *string                `json:"definedInMaterial"`
	EntryPoint        *string                `json:"entryPoint"`
	Environment       map[string]interface{} `json:"environment"`
	Type              *string                `json:"type"`
}
