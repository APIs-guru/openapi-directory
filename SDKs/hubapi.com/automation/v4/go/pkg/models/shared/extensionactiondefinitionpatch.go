package shared

type ExtensionActionDefinitionPatch struct {
	ActionURL              *string                 `json:"actionUrl"`
	InputFieldDependencies []interface{}           `json:"inputFieldDependencies"`
	InputFields            []InputFieldDefinition  `json:"inputFields"`
	Labels                 map[string]ActionLabels `json:"labels"`
	ObjectRequestOptions   *ObjectRequestOptions   `json:"objectRequestOptions"`
	ObjectTypes            []string                `json:"objectTypes"`
	Published              *bool                   `json:"published"`
}
