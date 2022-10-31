package shared



type ExtensionActionDefinitionInput struct {
    ActionURL string `json:"actionUrl"`
    ArchivedAt *int64 `json:"archivedAt,omitempty"`
    Functions []ActionFunction `json:"functions"`
    InputFieldDependencies []interface{} `json:"inputFieldDependencies,omitempty"`
    InputFields []InputFieldDefinition `json:"inputFields"`
    Labels map[string]ActionLabels `json:"labels"`
    ObjectRequestOptions *ObjectRequestOptions `json:"objectRequestOptions,omitempty"`
    ObjectTypes []string `json:"objectTypes"`
    Published bool `json:"published"`
    
}

