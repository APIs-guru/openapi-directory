package shared

type ImportJobImportMethodEnum string

const (
	ImportJobImportMethodEnumImportMethodUnspecified ImportJobImportMethodEnum = "IMPORT_METHOD_UNSPECIFIED"
	ImportJobImportMethodEnumRsaOaep3072Sha1Aes256   ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA1_AES_256"
	ImportJobImportMethodEnumRsaOaep4096Sha1Aes256   ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA1_AES_256"
	ImportJobImportMethodEnumRsaOaep3072Sha256Aes256 ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA256_AES_256"
	ImportJobImportMethodEnumRsaOaep4096Sha256Aes256 ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA256_AES_256"
	ImportJobImportMethodEnumRsaOaep3072Sha256       ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA256"
	ImportJobImportMethodEnumRsaOaep4096Sha256       ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA256"
)

type ImportJobProtectionLevelEnum string

const (
	ImportJobProtectionLevelEnumProtectionLevelUnspecified ImportJobProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	ImportJobProtectionLevelEnumSoftware                   ImportJobProtectionLevelEnum = "SOFTWARE"
	ImportJobProtectionLevelEnumHsm                        ImportJobProtectionLevelEnum = "HSM"
	ImportJobProtectionLevelEnumExternal                   ImportJobProtectionLevelEnum = "EXTERNAL"
	ImportJobProtectionLevelEnumExternalVpc                ImportJobProtectionLevelEnum = "EXTERNAL_VPC"
)

type ImportJobStateEnum string

const (
	ImportJobStateEnumImportJobStateUnspecified ImportJobStateEnum = "IMPORT_JOB_STATE_UNSPECIFIED"
	ImportJobStateEnumPendingGeneration         ImportJobStateEnum = "PENDING_GENERATION"
	ImportJobStateEnumActive                    ImportJobStateEnum = "ACTIVE"
	ImportJobStateEnumExpired                   ImportJobStateEnum = "EXPIRED"
)

type ImportJob struct {
	Attestation     *KeyOperationAttestation      `json:"attestation"`
	CreateTime      *string                       `json:"createTime"`
	ExpireEventTime *string                       `json:"expireEventTime"`
	ExpireTime      *string                       `json:"expireTime"`
	GenerateTime    *string                       `json:"generateTime"`
	ImportMethod    *ImportJobImportMethodEnum    `json:"importMethod"`
	Name            *string                       `json:"name"`
	ProtectionLevel *ImportJobProtectionLevelEnum `json:"protectionLevel"`
	PublicKey       *WrappingPublicKey            `json:"publicKey"`
	State           *ImportJobStateEnum           `json:"state"`
}
