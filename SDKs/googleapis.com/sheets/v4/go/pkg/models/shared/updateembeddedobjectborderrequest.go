package shared

type UpdateEmbeddedObjectBorderRequest struct {
	Border   *EmbeddedObjectBorder `json:"border"`
	Fields   *string               `json:"fields"`
	ObjectID *int32                `json:"objectId"`
}
