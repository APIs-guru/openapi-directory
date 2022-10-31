package shared



type UpdateDocumentStyleRequest struct {
    DocumentStyle *DocumentStyle `json:"documentStyle,omitempty"`
    Fields *string `json:"fields,omitempty"`
    
}

