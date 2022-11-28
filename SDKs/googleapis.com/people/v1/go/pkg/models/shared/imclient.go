package shared

// ImClientInput
// A person's instant messaging client.
type ImClientInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Protocol *string             `json:"protocol,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Username *string             `json:"username,omitempty"`
}

// ImClient
// A person's instant messaging client.
type ImClient struct {
	FormattedProtocol *string        `json:"formattedProtocol,omitempty"`
	FormattedType     *string        `json:"formattedType,omitempty"`
	Metadata          *FieldMetadata `json:"metadata,omitempty"`
	Protocol          *string        `json:"protocol,omitempty"`
	Type              *string        `json:"type,omitempty"`
	Username          *string        `json:"username,omitempty"`
}
