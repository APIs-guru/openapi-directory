package shared

type UpdateDocumentStyleRequest struct {
	DocumentStyle *DocumentStyle `json:"documentStyle"`
	Fields        *string        `json:"fields"`
}
