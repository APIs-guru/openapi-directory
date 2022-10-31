package shared

type UpdateEmbeddedObjectBorderRequest struct {
	Border   *EmbeddedObjectBorder `json:"border,omitempty"`
	Fields   *string               `json:"fields,omitempty"`
	ObjectID *int32                `json:"objectId,omitempty"`
}
