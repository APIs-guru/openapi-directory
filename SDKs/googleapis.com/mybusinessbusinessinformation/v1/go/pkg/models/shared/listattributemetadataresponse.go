package shared

// ListAttributeMetadataResponse
// Response for AttributesService.ListAttributeMetadata.
type ListAttributeMetadataResponse struct {
	AttributeMetadata []AttributeMetadata `json:"attributeMetadata,omitempty"`
	NextPageToken     *string             `json:"nextPageToken,omitempty"`
}
