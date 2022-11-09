import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";

export enum EncryptionInfoEncryptionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION"
,    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


// EncryptionInfo
/** 
 * Encryption information for a Cloud Spanner database or backup.
**/
export class EncryptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: Status;

  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: EncryptionInfoEncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsKeyVersion" })
  kmsKeyVersion?: string;
}
