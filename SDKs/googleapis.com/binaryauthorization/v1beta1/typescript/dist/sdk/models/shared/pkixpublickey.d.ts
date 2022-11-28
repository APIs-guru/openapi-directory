import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PkixPublicKeySignatureAlgorithmEnum {
    SignatureAlgorithmUnspecified = "SIGNATURE_ALGORITHM_UNSPECIFIED",
    RsaPss2048Sha256 = "RSA_PSS_2048_SHA256",
    RsaSignPss2048Sha256 = "RSA_SIGN_PSS_2048_SHA256",
    RsaPss3072Sha256 = "RSA_PSS_3072_SHA256",
    RsaSignPss3072Sha256 = "RSA_SIGN_PSS_3072_SHA256",
    RsaPss4096Sha256 = "RSA_PSS_4096_SHA256",
    RsaSignPss4096Sha256 = "RSA_SIGN_PSS_4096_SHA256",
    RsaPss4096Sha512 = "RSA_PSS_4096_SHA512",
    RsaSignPss4096Sha512 = "RSA_SIGN_PSS_4096_SHA512",
    RsaSignPkcs12048Sha256 = "RSA_SIGN_PKCS1_2048_SHA256",
    RsaSignPkcs13072Sha256 = "RSA_SIGN_PKCS1_3072_SHA256",
    RsaSignPkcs14096Sha256 = "RSA_SIGN_PKCS1_4096_SHA256",
    RsaSignPkcs14096Sha512 = "RSA_SIGN_PKCS1_4096_SHA512",
    EcdsaP256Sha256 = "ECDSA_P256_SHA256",
    EcSignP256Sha256 = "EC_SIGN_P256_SHA256",
    EcdsaP384Sha384 = "ECDSA_P384_SHA384",
    EcSignP384Sha384 = "EC_SIGN_P384_SHA384",
    EcdsaP521Sha512 = "ECDSA_P521_SHA512",
    EcSignP521Sha512 = "EC_SIGN_P521_SHA512"
}
/**
 * A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
**/
export declare class PkixPublicKey extends SpeakeasyBase {
    publicKeyPem?: string;
    signatureAlgorithm?: PkixPublicKeySignatureAlgorithmEnum;
}
