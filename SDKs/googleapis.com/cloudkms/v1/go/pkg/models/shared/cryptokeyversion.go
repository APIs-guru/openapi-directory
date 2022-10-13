package shared

type CryptoKeyVersionAlgorithmEnum string

const (
	CryptoKeyVersionAlgorithmEnumCryptoKeyVersionAlgorithmUnspecified CryptoKeyVersionAlgorithmEnum = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
	CryptoKeyVersionAlgorithmEnumGoogleSymmetricEncryption            CryptoKeyVersionAlgorithmEnum = "GOOGLE_SYMMETRIC_ENCRYPTION"
	CryptoKeyVersionAlgorithmEnumRsaSignPss2048Sha256                 CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPss3072Sha256                 CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPss4096Sha256                 CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPss4096Sha512                 CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	CryptoKeyVersionAlgorithmEnumRsaSignPkcs12048Sha256               CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPkcs13072Sha256               CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPkcs14096Sha256               CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaSignPkcs14096Sha512               CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs12048                  CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_2048"
	CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs13072                  CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_3072"
	CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs14096                  CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_4096"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep2048Sha256             CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep3072Sha256             CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha256             CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA256"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha512             CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA512"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep2048Sha1               CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA1"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep3072Sha1               CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA1"
	CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha1               CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA1"
	CryptoKeyVersionAlgorithmEnumEcSignP256Sha256                     CryptoKeyVersionAlgorithmEnum = "EC_SIGN_P256_SHA256"
	CryptoKeyVersionAlgorithmEnumEcSignP384Sha384                     CryptoKeyVersionAlgorithmEnum = "EC_SIGN_P384_SHA384"
	CryptoKeyVersionAlgorithmEnumEcSignSecp256K1Sha256                CryptoKeyVersionAlgorithmEnum = "EC_SIGN_SECP256K1_SHA256"
	CryptoKeyVersionAlgorithmEnumHmacSha256                           CryptoKeyVersionAlgorithmEnum = "HMAC_SHA256"
	CryptoKeyVersionAlgorithmEnumExternalSymmetricEncryption          CryptoKeyVersionAlgorithmEnum = "EXTERNAL_SYMMETRIC_ENCRYPTION"
)

type CryptoKeyVersionProtectionLevelEnum string

const (
	CryptoKeyVersionProtectionLevelEnumProtectionLevelUnspecified CryptoKeyVersionProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	CryptoKeyVersionProtectionLevelEnumSoftware                   CryptoKeyVersionProtectionLevelEnum = "SOFTWARE"
	CryptoKeyVersionProtectionLevelEnumHsm                        CryptoKeyVersionProtectionLevelEnum = "HSM"
	CryptoKeyVersionProtectionLevelEnumExternal                   CryptoKeyVersionProtectionLevelEnum = "EXTERNAL"
	CryptoKeyVersionProtectionLevelEnumExternalVpc                CryptoKeyVersionProtectionLevelEnum = "EXTERNAL_VPC"
)

type CryptoKeyVersionStateEnum string

const (
	CryptoKeyVersionStateEnumCryptoKeyVersionStateUnspecified CryptoKeyVersionStateEnum = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
	CryptoKeyVersionStateEnumPendingGeneration                CryptoKeyVersionStateEnum = "PENDING_GENERATION"
	CryptoKeyVersionStateEnumEnabled                          CryptoKeyVersionStateEnum = "ENABLED"
	CryptoKeyVersionStateEnumDisabled                         CryptoKeyVersionStateEnum = "DISABLED"
	CryptoKeyVersionStateEnumDestroyed                        CryptoKeyVersionStateEnum = "DESTROYED"
	CryptoKeyVersionStateEnumDestroyScheduled                 CryptoKeyVersionStateEnum = "DESTROY_SCHEDULED"
	CryptoKeyVersionStateEnumPendingImport                    CryptoKeyVersionStateEnum = "PENDING_IMPORT"
	CryptoKeyVersionStateEnumImportFailed                     CryptoKeyVersionStateEnum = "IMPORT_FAILED"
)

type CryptoKeyVersion struct {
	Algorithm                      *CryptoKeyVersionAlgorithmEnum       `json:"algorithm"`
	Attestation                    *KeyOperationAttestation             `json:"attestation"`
	CreateTime                     *string                              `json:"createTime"`
	DestroyEventTime               *string                              `json:"destroyEventTime"`
	DestroyTime                    *string                              `json:"destroyTime"`
	ExternalProtectionLevelOptions *ExternalProtectionLevelOptions      `json:"externalProtectionLevelOptions"`
	GenerateTime                   *string                              `json:"generateTime"`
	ImportFailureReason            *string                              `json:"importFailureReason"`
	ImportJob                      *string                              `json:"importJob"`
	ImportTime                     *string                              `json:"importTime"`
	Name                           *string                              `json:"name"`
	ProtectionLevel                *CryptoKeyVersionProtectionLevelEnum `json:"protectionLevel"`
	ReimportEligible               *bool                                `json:"reimportEligible"`
	State                          *CryptoKeyVersionStateEnum           `json:"state"`
}
