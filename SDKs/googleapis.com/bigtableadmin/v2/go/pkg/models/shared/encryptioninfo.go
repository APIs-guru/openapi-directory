package shared

type EncryptionInfoEncryptionTypeEnum string

const (
	EncryptionInfoEncryptionTypeEnumEncryptionTypeUnspecified EncryptionInfoEncryptionTypeEnum = "ENCRYPTION_TYPE_UNSPECIFIED"
	EncryptionInfoEncryptionTypeEnumGoogleDefaultEncryption   EncryptionInfoEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	EncryptionInfoEncryptionTypeEnumCustomerManagedEncryption EncryptionInfoEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

type EncryptionInfo struct {
	EncryptionStatus *Status                           `json:"encryptionStatus"`
	EncryptionType   *EncryptionInfoEncryptionTypeEnum `json:"encryptionType"`
	KmsKeyVersion    *string                           `json:"kmsKeyVersion"`
}
