package shared

// EmailAddressInput
// A person's email address.
type EmailAddressInput struct {
	DisplayName *string             `json:"displayName,omitempty"`
	Metadata    *FieldMetadataInput `json:"metadata,omitempty"`
	Type        *string             `json:"type,omitempty"`
	Value       *string             `json:"value,omitempty"`
}

// EmailAddress
// A person's email address.
type EmailAddress struct {
	DisplayName   *string        `json:"displayName,omitempty"`
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
}
