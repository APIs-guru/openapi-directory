package shared

type EncryptionInfoEncryptionTypeEnum string

const (
	EncryptionInfoEncryptionTypeEnumTypeUnspecified           EncryptionInfoEncryptionTypeEnum = "TYPE_UNSPECIFIED"
	EncryptionInfoEncryptionTypeEnumGoogleDefaultEncryption   EncryptionInfoEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	EncryptionInfoEncryptionTypeEnumCustomerManagedEncryption EncryptionInfoEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

// EncryptionInfoInput
// Encryption information for a Cloud Spanner database or backup.
type EncryptionInfoInput struct {
	EncryptionStatus *Status `json:"encryptionStatus,omitempty"`
}

// EncryptionInfo
// Encryption information for a Cloud Spanner database or backup.
type EncryptionInfo struct {
	EncryptionStatus *Status                           `json:"encryptionStatus,omitempty"`
	EncryptionType   *EncryptionInfoEncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsKeyVersion    *string                           `json:"kmsKeyVersion,omitempty"`
}
