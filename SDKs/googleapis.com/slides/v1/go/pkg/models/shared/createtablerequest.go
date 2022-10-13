package shared

type CreateTableRequest struct {
	Columns           *int32                 `json:"columns"`
	ElementProperties *PageElementProperties `json:"elementProperties"`
	ObjectID          *string                `json:"objectId"`
	Rows              *int32                 `json:"rows"`
}
