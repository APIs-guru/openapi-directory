package shared

type ImportCryptoKeyVersionRequestAlgorithmEnum string

const (
	ImportCryptoKeyVersionRequestAlgorithmEnumCryptoKeyVersionAlgorithmUnspecified ImportCryptoKeyVersionRequestAlgorithmEnum = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
	ImportCryptoKeyVersionRequestAlgorithmEnumGoogleSymmetricEncryption            ImportCryptoKeyVersionRequestAlgorithmEnum = "GOOGLE_SYMMETRIC_ENCRYPTION"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPss2048Sha256                 ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPss3072Sha256                 ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPss4096Sha256                 ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPss4096Sha512                 ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPkcs12048Sha256               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPkcs13072Sha256               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPkcs14096Sha256               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignPkcs14096Sha512               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignRawPkcs12048                  ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_2048"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignRawPkcs13072                  ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_3072"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaSignRawPkcs14096                  ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_4096"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep2048Sha256             ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep3072Sha256             ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep4096Sha256             ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep4096Sha512             ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA512"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep2048Sha1               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA1"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep3072Sha1               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA1"
	ImportCryptoKeyVersionRequestAlgorithmEnumRsaDecryptOaep4096Sha1               ImportCryptoKeyVersionRequestAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA1"
	ImportCryptoKeyVersionRequestAlgorithmEnumEcSignP256Sha256                     ImportCryptoKeyVersionRequestAlgorithmEnum = "EC_SIGN_P256_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumEcSignP384Sha384                     ImportCryptoKeyVersionRequestAlgorithmEnum = "EC_SIGN_P384_SHA384"
	ImportCryptoKeyVersionRequestAlgorithmEnumEcSignSecp256K1Sha256                ImportCryptoKeyVersionRequestAlgorithmEnum = "EC_SIGN_SECP256K1_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha256                           ImportCryptoKeyVersionRequestAlgorithmEnum = "HMAC_SHA256"
	ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha1                             ImportCryptoKeyVersionRequestAlgorithmEnum = "HMAC_SHA1"
	ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha384                           ImportCryptoKeyVersionRequestAlgorithmEnum = "HMAC_SHA384"
	ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha512                           ImportCryptoKeyVersionRequestAlgorithmEnum = "HMAC_SHA512"
	ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha224                           ImportCryptoKeyVersionRequestAlgorithmEnum = "HMAC_SHA224"
	ImportCryptoKeyVersionRequestAlgorithmEnumExternalSymmetricEncryption          ImportCryptoKeyVersionRequestAlgorithmEnum = "EXTERNAL_SYMMETRIC_ENCRYPTION"
)

// ImportCryptoKeyVersionRequest
// Request message for KeyManagementService.ImportCryptoKeyVersion.
type ImportCryptoKeyVersionRequest struct {
	Algorithm        *ImportCryptoKeyVersionRequestAlgorithmEnum `json:"algorithm,omitempty"`
	CryptoKeyVersion *string                                     `json:"cryptoKeyVersion,omitempty"`
	ImportJob        *string                                     `json:"importJob,omitempty"`
	RsaAesWrappedKey *string                                     `json:"rsaAesWrappedKey,omitempty"`
	WrappedKey       *string                                     `json:"wrappedKey,omitempty"`
}
