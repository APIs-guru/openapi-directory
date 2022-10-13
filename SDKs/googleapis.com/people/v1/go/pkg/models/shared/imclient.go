package shared

type ImClient struct {
	FormattedProtocol *string        `json:"formattedProtocol"`
	FormattedType     *string        `json:"formattedType"`
	Metadata          *FieldMetadata `json:"metadata"`
	Protocol          *string        `json:"protocol"`
	Type              *string        `json:"type"`
	Username          *string        `json:"username"`
}
