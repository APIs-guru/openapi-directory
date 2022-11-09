import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicKeyAlgorithmEnum {
    CryptoKeyVersionAlgorithmUnspecified = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
,    GoogleSymmetricEncryption = "GOOGLE_SYMMETRIC_ENCRYPTION"
,    RsaSignPss2048Sha256 = "RSA_SIGN_PSS_2048_SHA256"
,    RsaSignPss3072Sha256 = "RSA_SIGN_PSS_3072_SHA256"
,    RsaSignPss4096Sha256 = "RSA_SIGN_PSS_4096_SHA256"
,    RsaSignPss4096Sha512 = "RSA_SIGN_PSS_4096_SHA512"
,    RsaSignPkcs12048Sha256 = "RSA_SIGN_PKCS1_2048_SHA256"
,    RsaSignPkcs13072Sha256 = "RSA_SIGN_PKCS1_3072_SHA256"
,    RsaSignPkcs14096Sha256 = "RSA_SIGN_PKCS1_4096_SHA256"
,    RsaSignPkcs14096Sha512 = "RSA_SIGN_PKCS1_4096_SHA512"
,    RsaSignRawPkcs12048 = "RSA_SIGN_RAW_PKCS1_2048"
,    RsaSignRawPkcs13072 = "RSA_SIGN_RAW_PKCS1_3072"
,    RsaSignRawPkcs14096 = "RSA_SIGN_RAW_PKCS1_4096"
,    RsaDecryptOaep2048Sha256 = "RSA_DECRYPT_OAEP_2048_SHA256"
,    RsaDecryptOaep3072Sha256 = "RSA_DECRYPT_OAEP_3072_SHA256"
,    RsaDecryptOaep4096Sha256 = "RSA_DECRYPT_OAEP_4096_SHA256"
,    RsaDecryptOaep4096Sha512 = "RSA_DECRYPT_OAEP_4096_SHA512"
,    RsaDecryptOaep2048Sha1 = "RSA_DECRYPT_OAEP_2048_SHA1"
,    RsaDecryptOaep3072Sha1 = "RSA_DECRYPT_OAEP_3072_SHA1"
,    RsaDecryptOaep4096Sha1 = "RSA_DECRYPT_OAEP_4096_SHA1"
,    EcSignP256Sha256 = "EC_SIGN_P256_SHA256"
,    EcSignP384Sha384 = "EC_SIGN_P384_SHA384"
,    EcSignSecp256K1Sha256 = "EC_SIGN_SECP256K1_SHA256"
,    HmacSha256 = "HMAC_SHA256"
,    ExternalSymmetricEncryption = "EXTERNAL_SYMMETRIC_ENCRYPTION"
}

export enum PublicKeyProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}


// PublicKey
/** 
 * The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.
**/
export class PublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: PublicKeyAlgorithmEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pem" })
  pem?: string;

  @Metadata({ data: "json, name=pemCrc32c" })
  pemCrc32c?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: PublicKeyProtectionLevelEnum;
}
