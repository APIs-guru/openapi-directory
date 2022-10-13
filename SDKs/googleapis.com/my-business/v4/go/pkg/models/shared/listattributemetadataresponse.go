package shared

type ListAttributeMetadataResponse struct {
	Attributes    []AttributeMetadata `json:"attributes"`
	NextPageToken *string             `json:"nextPageToken"`
}
