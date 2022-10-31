package shared



type ListAttributeMetadataResponse struct {
    AttributeMetadata []AttributeMetadata `json:"attributeMetadata,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

