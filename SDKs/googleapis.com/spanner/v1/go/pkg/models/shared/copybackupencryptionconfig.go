package shared

type CopyBackupEncryptionConfigEncryptionTypeEnum string

const (
	CopyBackupEncryptionConfigEncryptionTypeEnumEncryptionTypeUnspecified          CopyBackupEncryptionConfigEncryptionTypeEnum = "ENCRYPTION_TYPE_UNSPECIFIED"
	CopyBackupEncryptionConfigEncryptionTypeEnumUseConfigDefaultOrBackupEncryption CopyBackupEncryptionConfigEncryptionTypeEnum = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
	CopyBackupEncryptionConfigEncryptionTypeEnumGoogleDefaultEncryption            CopyBackupEncryptionConfigEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	CopyBackupEncryptionConfigEncryptionTypeEnumCustomerManagedEncryption          CopyBackupEncryptionConfigEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

type CopyBackupEncryptionConfig struct {
	EncryptionType *CopyBackupEncryptionConfigEncryptionTypeEnum `json:"encryptionType"`
	KmsKeyName     *string                                       `json:"kmsKeyName"`
}
