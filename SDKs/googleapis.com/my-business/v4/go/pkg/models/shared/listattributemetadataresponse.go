package shared



type ListAttributeMetadataResponse struct {
    Attributes []AttributeMetadata `json:"attributes,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

