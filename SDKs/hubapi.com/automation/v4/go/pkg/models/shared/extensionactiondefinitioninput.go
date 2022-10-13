package shared

type ExtensionActionDefinitionInput struct {
	ActionURL              string                  `json:"actionUrl"`
	ArchivedAt             *int64                  `json:"archivedAt"`
	Functions              []ActionFunction        `json:"functions"`
	InputFieldDependencies []interface{}           `json:"inputFieldDependencies"`
	InputFields            []InputFieldDefinition  `json:"inputFields"`
	Labels                 map[string]ActionLabels `json:"labels"`
	ObjectRequestOptions   *ObjectRequestOptions   `json:"objectRequestOptions"`
	ObjectTypes            []string                `json:"objectTypes"`
	Published              bool                    `json:"published"`
}
