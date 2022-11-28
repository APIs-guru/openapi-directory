package shared

// ListAttributeMetadataResponse
// Response message for Locations.ListAttributeMetadata.
type ListAttributeMetadataResponse struct {
	Attributes    []AttributeMetadata `json:"attributes,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
}
