package shared




type ImportJobImportMethodEnum string

const (
    ImportJobImportMethodEnumImportMethodUnspecified ImportJobImportMethodEnum = "IMPORT_METHOD_UNSPECIFIED"
ImportJobImportMethodEnumRsaOaep3072Sha1Aes256 ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA1_AES_256"
ImportJobImportMethodEnumRsaOaep4096Sha1Aes256 ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA1_AES_256"
ImportJobImportMethodEnumRsaOaep3072Sha256Aes256 ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA256_AES_256"
ImportJobImportMethodEnumRsaOaep4096Sha256Aes256 ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA256_AES_256"
ImportJobImportMethodEnumRsaOaep3072Sha256 ImportJobImportMethodEnum = "RSA_OAEP_3072_SHA256"
ImportJobImportMethodEnumRsaOaep4096Sha256 ImportJobImportMethodEnum = "RSA_OAEP_4096_SHA256"
)



type ImportJobProtectionLevelEnum string

const (
    ImportJobProtectionLevelEnumProtectionLevelUnspecified ImportJobProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
ImportJobProtectionLevelEnumSoftware ImportJobProtectionLevelEnum = "SOFTWARE"
ImportJobProtectionLevelEnumHsm ImportJobProtectionLevelEnum = "HSM"
ImportJobProtectionLevelEnumExternal ImportJobProtectionLevelEnum = "EXTERNAL"
ImportJobProtectionLevelEnumExternalVpc ImportJobProtectionLevelEnum = "EXTERNAL_VPC"
)



type ImportJobStateEnum string

const (
    ImportJobStateEnumImportJobStateUnspecified ImportJobStateEnum = "IMPORT_JOB_STATE_UNSPECIFIED"
ImportJobStateEnumPendingGeneration ImportJobStateEnum = "PENDING_GENERATION"
ImportJobStateEnumActive ImportJobStateEnum = "ACTIVE"
ImportJobStateEnumExpired ImportJobStateEnum = "EXPIRED"
)


type ImportJob struct {
    Attestation *KeyOperationAttestation `json:"attestation,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    ExpireEventTime *string `json:"expireEventTime,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    GenerateTime *string `json:"generateTime,omitempty"`
    ImportMethod *ImportJobImportMethodEnum `json:"importMethod,omitempty"`
    Name *string `json:"name,omitempty"`
    ProtectionLevel *ImportJobProtectionLevelEnum `json:"protectionLevel,omitempty"`
    PublicKey *WrappingPublicKey `json:"publicKey,omitempty"`
    State *ImportJobStateEnum `json:"state,omitempty"`
    
}

