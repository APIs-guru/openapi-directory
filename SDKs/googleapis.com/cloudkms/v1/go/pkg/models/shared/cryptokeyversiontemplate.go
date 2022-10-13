package shared

type CryptoKeyVersionTemplateAlgorithmEnum string

const (
	CryptoKeyVersionTemplateAlgorithmEnumCryptoKeyVersionAlgorithmUnspecified CryptoKeyVersionTemplateAlgorithmEnum = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
	CryptoKeyVersionTemplateAlgorithmEnumGoogleSymmetricEncryption            CryptoKeyVersionTemplateAlgorithmEnum = "GOOGLE_SYMMETRIC_ENCRYPTION"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss2048Sha256                 CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss3072Sha256                 CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss4096Sha256                 CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss4096Sha512                 CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs12048Sha256               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs13072Sha256               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs14096Sha256               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs14096Sha512               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs12048                  CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_2048"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs13072                  CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_3072"
	CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs14096                  CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_4096"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep2048Sha256             CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep3072Sha256             CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha256             CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha512             CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA512"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep2048Sha1               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA1"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep3072Sha1               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA1"
	CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha1               CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA1"
	CryptoKeyVersionTemplateAlgorithmEnumEcSignP256Sha256                     CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_P256_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumEcSignP384Sha384                     CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_P384_SHA384"
	CryptoKeyVersionTemplateAlgorithmEnumEcSignSecp256K1Sha256                CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_SECP256K1_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumHmacSha256                           CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA256"
	CryptoKeyVersionTemplateAlgorithmEnumExternalSymmetricEncryption          CryptoKeyVersionTemplateAlgorithmEnum = "EXTERNAL_SYMMETRIC_ENCRYPTION"
)

type CryptoKeyVersionTemplateProtectionLevelEnum string

const (
	CryptoKeyVersionTemplateProtectionLevelEnumProtectionLevelUnspecified CryptoKeyVersionTemplateProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	CryptoKeyVersionTemplateProtectionLevelEnumSoftware                   CryptoKeyVersionTemplateProtectionLevelEnum = "SOFTWARE"
	CryptoKeyVersionTemplateProtectionLevelEnumHsm                        CryptoKeyVersionTemplateProtectionLevelEnum = "HSM"
	CryptoKeyVersionTemplateProtectionLevelEnumExternal                   CryptoKeyVersionTemplateProtectionLevelEnum = "EXTERNAL"
	CryptoKeyVersionTemplateProtectionLevelEnumExternalVpc                CryptoKeyVersionTemplateProtectionLevelEnum = "EXTERNAL_VPC"
)

type CryptoKeyVersionTemplate struct {
	Algorithm       *CryptoKeyVersionTemplateAlgorithmEnum       `json:"algorithm"`
	ProtectionLevel *CryptoKeyVersionTemplateProtectionLevelEnum `json:"protectionLevel"`
}
