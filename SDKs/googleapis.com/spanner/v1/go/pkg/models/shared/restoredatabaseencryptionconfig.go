package shared

type RestoreDatabaseEncryptionConfigEncryptionTypeEnum string

const (
	RestoreDatabaseEncryptionConfigEncryptionTypeEnumEncryptionTypeUnspecified          RestoreDatabaseEncryptionConfigEncryptionTypeEnum = "ENCRYPTION_TYPE_UNSPECIFIED"
	RestoreDatabaseEncryptionConfigEncryptionTypeEnumUseConfigDefaultOrBackupEncryption RestoreDatabaseEncryptionConfigEncryptionTypeEnum = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
	RestoreDatabaseEncryptionConfigEncryptionTypeEnumGoogleDefaultEncryption            RestoreDatabaseEncryptionConfigEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	RestoreDatabaseEncryptionConfigEncryptionTypeEnumCustomerManagedEncryption          RestoreDatabaseEncryptionConfigEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

// RestoreDatabaseEncryptionConfig
// Encryption configuration for the restored database.
type RestoreDatabaseEncryptionConfig struct {
	EncryptionType *RestoreDatabaseEncryptionConfigEncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsKeyName     *string                                            `json:"kmsKeyName,omitempty"`
}
