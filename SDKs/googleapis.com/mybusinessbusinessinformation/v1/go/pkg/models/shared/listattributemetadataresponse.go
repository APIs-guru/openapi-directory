package shared

type ListAttributeMetadataResponse struct {
	AttributeMetadata []AttributeMetadata `json:"attributeMetadata"`
	NextPageToken     *string             `json:"nextPageToken"`
}
