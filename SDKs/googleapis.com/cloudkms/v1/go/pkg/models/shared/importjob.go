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

// ImportJob
// An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
type ImportJob struct {
	Attestation     *KeyOperationAttestation      `json:"attestation,omitempty"`
	CreateTime      *string                       `json:"createTime,omitempty"`
	ExpireEventTime *string                       `json:"expireEventTime,omitempty"`
	ExpireTime      *string                       `json:"expireTime,omitempty"`
	GenerateTime    *string                       `json:"generateTime,omitempty"`
	ImportMethod    *ImportJobImportMethodEnum    `json:"importMethod,omitempty"`
	Name            *string                       `json:"name,omitempty"`
	ProtectionLevel *ImportJobProtectionLevelEnum `json:"protectionLevel,omitempty"`
	PublicKey       *WrappingPublicKey            `json:"publicKey,omitempty"`
	State           *ImportJobStateEnum           `json:"state,omitempty"`
}

// ImportJobInput
// An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
type ImportJobInput struct {
	Attestation     *KeyOperationAttestationInput `json:"attestation,omitempty"`
	ImportMethod    *ImportJobImportMethodEnum    `json:"importMethod,omitempty"`
	ProtectionLevel *ImportJobProtectionLevelEnum `json:"protectionLevel,omitempty"`
	PublicKey       *WrappingPublicKey            `json:"publicKey,omitempty"`
}
