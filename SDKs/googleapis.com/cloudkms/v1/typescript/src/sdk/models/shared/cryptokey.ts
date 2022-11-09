import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CryptoKeyVersion } from "./cryptokeyversion";
import { CryptoKeyVersionTemplate } from "./cryptokeyversiontemplate";

export enum CryptoKeyPurposeEnum {
    CryptoKeyPurposeUnspecified = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
,    EncryptDecrypt = "ENCRYPT_DECRYPT"
,    AsymmetricSign = "ASYMMETRIC_SIGN"
,    AsymmetricDecrypt = "ASYMMETRIC_DECRYPT"
,    Mac = "MAC"
}


// CryptoKey
/** 
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
export class CryptoKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=cryptoKeyBackend" })
  cryptoKeyBackend?: string;

  @Metadata({ data: "json, name=destroyScheduledDuration" })
  destroyScheduledDuration?: string;

  @Metadata({ data: "json, name=importOnly" })
  importOnly?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: CryptoKeyVersion;

  @Metadata({ data: "json, name=purpose" })
  purpose?: CryptoKeyPurposeEnum;

  @Metadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;

  @Metadata({ data: "json, name=versionTemplate" })
  versionTemplate?: CryptoKeyVersionTemplate;
}
