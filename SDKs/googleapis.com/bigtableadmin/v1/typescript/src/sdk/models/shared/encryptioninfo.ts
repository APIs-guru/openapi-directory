import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";

export enum EncryptionInfoEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED"
,    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION"
,    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


// EncryptionInfo
/** 
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
**/
export class EncryptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: Status;

  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: EncryptionInfoEncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsKeyVersion" })
  kmsKeyVersion?: string;
}
