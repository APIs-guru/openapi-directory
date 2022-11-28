import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersionInput } from "./cryptokeyversion";
import { CryptoKeyVersionTemplate } from "./cryptokeyversiontemplate";
import { CryptoKeyVersion } from "./cryptokeyversion";


export enum CryptoKeyPurposeEnum {
    CryptoKeyPurposeUnspecified = "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
    EncryptDecrypt = "ENCRYPT_DECRYPT",
    AsymmetricSign = "ASYMMETRIC_SIGN",
    AsymmetricDecrypt = "ASYMMETRIC_DECRYPT",
    Mac = "MAC"
}


// CryptoKeyInput
/** 
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
export class CryptoKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeyBackend" })
  cryptoKeyBackend?: string;

  @SpeakeasyMetadata({ data: "json, name=destroyScheduledDuration" })
  destroyScheduledDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=importOnly" })
  importOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: CryptoKeyVersionInput;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: CryptoKeyPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=versionTemplate" })
  versionTemplate?: CryptoKeyVersionTemplate;
}


// CryptoKey
/** 
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
export class CryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=cryptoKeyBackend" })
  cryptoKeyBackend?: string;

  @SpeakeasyMetadata({ data: "json, name=destroyScheduledDuration" })
  destroyScheduledDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=importOnly" })
  importOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: CryptoKeyVersion;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: CryptoKeyPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=versionTemplate" })
  versionTemplate?: CryptoKeyVersionTemplate;
}
