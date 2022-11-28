import { SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersionInput } from "./cryptokeyversion";
import { CryptoKeyVersionTemplate } from "./cryptokeyversiontemplate";
import { CryptoKeyVersion } from "./cryptokeyversion";
export declare enum CryptoKeyPurposeEnum {
    CryptoKeyPurposeUnspecified = "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
    EncryptDecrypt = "ENCRYPT_DECRYPT",
    AsymmetricSign = "ASYMMETRIC_SIGN",
    AsymmetricDecrypt = "ASYMMETRIC_DECRYPT",
    Mac = "MAC"
}
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
export declare class CryptoKeyInput extends SpeakeasyBase {
    cryptoKeyBackend?: string;
    destroyScheduledDuration?: string;
    importOnly?: boolean;
    labels?: Map<string, string>;
    nextRotationTime?: string;
    primary?: CryptoKeyVersionInput;
    purpose?: CryptoKeyPurposeEnum;
    rotationPeriod?: string;
    versionTemplate?: CryptoKeyVersionTemplate;
}
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
export declare class CryptoKey extends SpeakeasyBase {
    createTime?: string;
    cryptoKeyBackend?: string;
    destroyScheduledDuration?: string;
    importOnly?: boolean;
    labels?: Map<string, string>;
    name?: string;
    nextRotationTime?: string;
    primary?: CryptoKeyVersion;
    purpose?: CryptoKeyPurposeEnum;
    rotationPeriod?: string;
    versionTemplate?: CryptoKeyVersionTemplate;
}
