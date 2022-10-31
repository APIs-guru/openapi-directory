package shared



type ListMetadataImportsResponse struct {
    MetadataImports []MetadataImport `json:"metadataImports,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

