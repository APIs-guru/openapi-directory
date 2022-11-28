import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyOperationAttestation } from "./keyoperationattestation";
import { WrappingPublicKey } from "./wrappingpublickey";
import { KeyOperationAttestationInput } from "./keyoperationattestation";


export enum ImportJobImportMethodEnum {
    ImportMethodUnspecified = "IMPORT_METHOD_UNSPECIFIED",
    RsaOaep3072Sha1Aes256 = "RSA_OAEP_3072_SHA1_AES_256",
    RsaOaep4096Sha1Aes256 = "RSA_OAEP_4096_SHA1_AES_256",
    RsaOaep3072Sha256Aes256 = "RSA_OAEP_3072_SHA256_AES_256",
    RsaOaep4096Sha256Aes256 = "RSA_OAEP_4096_SHA256_AES_256",
    RsaOaep3072Sha256 = "RSA_OAEP_3072_SHA256",
    RsaOaep4096Sha256 = "RSA_OAEP_4096_SHA256"
}

export enum ImportJobProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}

export enum ImportJobStateEnum {
    ImportJobStateUnspecified = "IMPORT_JOB_STATE_UNSPECIFIED",
    PendingGeneration = "PENDING_GENERATION",
    Active = "ACTIVE",
    Expired = "EXPIRED"
}


// ImportJob
/** 
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
export class ImportJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: KeyOperationAttestation;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireEventTime" })
  expireEventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=generateTime" })
  generateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=importMethod" })
  importMethod?: ImportJobImportMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: ImportJobProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: WrappingPublicKey;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ImportJobStateEnum;
}


// ImportJobInput
/** 
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
**/
export class ImportJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: KeyOperationAttestationInput;

  @SpeakeasyMetadata({ data: "json, name=importMethod" })
  importMethod?: ImportJobImportMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=protectionLevel" })
  protectionLevel?: ImportJobProtectionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: WrappingPublicKey;
}
