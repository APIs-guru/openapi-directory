import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum EncryptionInfoEncryptionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


// EncryptionInfo
/** 
 * Encryption information for a Cloud Spanner database or backup.
**/
export class EncryptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType?: EncryptionInfoEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersion" })
  kmsKeyVersion?: string;
}


// EncryptionInfoInput
/** 
 * Encryption information for a Cloud Spanner database or backup.
**/
export class EncryptionInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: Status;
}
