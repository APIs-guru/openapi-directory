package shared

type EncryptionInfoEncryptionTypeEnum string

const (
	EncryptionInfoEncryptionTypeEnumTypeUnspecified           EncryptionInfoEncryptionTypeEnum = "TYPE_UNSPECIFIED"
	EncryptionInfoEncryptionTypeEnumGoogleDefaultEncryption   EncryptionInfoEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	EncryptionInfoEncryptionTypeEnumCustomerManagedEncryption EncryptionInfoEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

type EncryptionInfo struct {
	EncryptionStatus *Status                           `json:"encryptionStatus,omitempty"`
	EncryptionType   *EncryptionInfoEncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsKeyVersion    *string                           `json:"kmsKeyVersion,omitempty"`
}
