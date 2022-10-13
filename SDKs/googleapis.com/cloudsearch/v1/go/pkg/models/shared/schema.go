package shared

type Schema struct {
	ObjectDefinitions []ObjectDefinition `json:"objectDefinitions"`
	OperationIds      []string           `json:"operationIds"`
}
