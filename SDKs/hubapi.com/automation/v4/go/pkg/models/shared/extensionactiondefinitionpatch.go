package shared

type ExtensionActionDefinitionPatch struct {
	ActionURL              *string                 `json:"actionUrl,omitempty"`
	InputFieldDependencies []interface{}           `json:"inputFieldDependencies,omitempty"`
	InputFields            []InputFieldDefinition  `json:"inputFields,omitempty"`
	Labels                 map[string]ActionLabels `json:"labels,omitempty"`
	ObjectRequestOptions   *ObjectRequestOptions   `json:"objectRequestOptions,omitempty"`
	ObjectTypes            []string                `json:"objectTypes,omitempty"`
	Published              *bool                   `json:"published,omitempty"`
}
