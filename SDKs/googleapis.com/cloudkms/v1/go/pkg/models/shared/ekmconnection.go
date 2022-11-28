package shared

// EkmConnection
// An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
type EkmConnection struct {
	CreateTime       *string           `json:"createTime,omitempty"`
	Etag             *string           `json:"etag,omitempty"`
	Name             *string           `json:"name,omitempty"`
	ServiceResolvers []ServiceResolver `json:"serviceResolvers,omitempty"`
}

// EkmConnectionInput
// An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
type EkmConnectionInput struct {
	Etag             *string                `json:"etag,omitempty"`
	ServiceResolvers []ServiceResolverInput `json:"serviceResolvers,omitempty"`
}
