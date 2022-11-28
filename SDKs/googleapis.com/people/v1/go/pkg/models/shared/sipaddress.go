package shared

// SipAddress
// A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
type SipAddress struct {
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
}

// SipAddressInput
// A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
type SipAddressInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
