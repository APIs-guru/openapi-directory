package shared

// CreateTableRequest
// Creates a new table.
type CreateTableRequest struct {
	Columns           *int32                 `json:"columns,omitempty"`
	ElementProperties *PageElementProperties `json:"elementProperties,omitempty"`
	ObjectID          *string                `json:"objectId,omitempty"`
	Rows              *int32                 `json:"rows,omitempty"`
}
