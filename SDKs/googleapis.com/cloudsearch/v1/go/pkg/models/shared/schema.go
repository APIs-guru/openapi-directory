package shared

// Schema
// The schema definition for a data source.
type Schema struct {
	ObjectDefinitions []ObjectDefinition `json:"objectDefinitions,omitempty"`
	OperationIds      []string           `json:"operationIds,omitempty"`
}
