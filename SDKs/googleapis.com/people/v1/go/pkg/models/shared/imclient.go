package shared

type ImClient struct {
	FormattedProtocol *string        `json:"formattedProtocol,omitempty"`
	FormattedType     *string        `json:"formattedType,omitempty"`
	Metadata          *FieldMetadata `json:"metadata,omitempty"`
	Protocol          *string        `json:"protocol,omitempty"`
	Type              *string        `json:"type,omitempty"`
	Username          *string        `json:"username,omitempty"`
}
