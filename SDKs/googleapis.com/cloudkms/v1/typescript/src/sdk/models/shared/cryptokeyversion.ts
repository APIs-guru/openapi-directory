import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyOperationAttestation } from "./keyoperationattestation";
import { ExternalProtectionLevelOptions } from "./externalprotectionleveloptions";

export enum CryptoKeyVersionAlgorithmEnum {
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

export enum CryptoKeyVersionProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED"
,    Software = "SOFTWARE"
,    Hsm = "HSM"
,    External = "EXTERNAL"
,    ExternalVpc = "EXTERNAL_VPC"
}

export enum CryptoKeyVersionStateEnum {
    CryptoKeyVersionStateUnspecified = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
,    PendingGeneration = "PENDING_GENERATION"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Destroyed = "DESTROYED"
,    DestroyScheduled = "DESTROY_SCHEDULED"
,    PendingImport = "PENDING_IMPORT"
,    ImportFailed = "IMPORT_FAILED"
}


// CryptoKeyVersion
/** 
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
**/
export class CryptoKeyVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: CryptoKeyVersionAlgorithmEnum;

  @Metadata({ data: "json, name=attestation" })
  attestation?: KeyOperationAttestation;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destroyEventTime" })
  destroyEventTime?: string;

  @Metadata({ data: "json, name=destroyTime" })
  destroyTime?: string;

  @Metadata({ data: "json, name=externalProtectionLevelOptions" })
  externalProtectionLevelOptions?: ExternalProtectionLevelOptions;

  @Metadata({ data: "json, name=generateTime" })
  generateTime?: string;

  @Metadata({ data: "json, name=importFailureReason" })
  importFailureReason?: string;

  @Metadata({ data: "json, name=importJob" })
  importJob?: string;

  @Metadata({ data: "json, name=importTime" })
  importTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectionLevel" })
  protectionLevel?: CryptoKeyVersionProtectionLevelEnum;

  @Metadata({ data: "json, name=reimportEligible" })
  reimportEligible?: boolean;

  @Metadata({ data: "json, name=state" })
  state?: CryptoKeyVersionStateEnum;
}
