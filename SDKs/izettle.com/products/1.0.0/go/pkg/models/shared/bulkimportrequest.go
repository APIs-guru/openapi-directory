package shared



type BulkImportRequest struct {
    Products []FullProductUpdateRequest `json:"products"`
    
}

