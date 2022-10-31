package shared



type Schema struct {
    ObjectDefinitions []ObjectDefinition `json:"objectDefinitions,omitempty"`
    OperationIds []string `json:"operationIds,omitempty"`
    
}

