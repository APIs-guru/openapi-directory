package shared



type ExtensionActionDefinition struct {
    ActionURL string `json:"actionUrl"`
    ArchivedAt *int64 `json:"archivedAt,omitempty"`
    Functions []ActionFunctionIdentifier `json:"functions"`
    ID string `json:"id"`
    InputFieldDependencies []interface{} `json:"inputFieldDependencies,omitempty"`
    InputFields []InputFieldDefinition `json:"inputFields"`
    Labels map[string]ActionLabels `json:"labels"`
    ObjectRequestOptions *ObjectRequestOptions `json:"objectRequestOptions,omitempty"`
    ObjectTypes []string `json:"objectTypes"`
    Published bool `json:"published"`
    RevisionID string `json:"revisionId"`
    
}

