import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum EncryptionInfoEncryptionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
/**
 * Encryption information for a Cloud Spanner database or backup.
**/
export declare class EncryptionInfo extends SpeakeasyBase {
    encryptionStatus?: Status;
    encryptionType?: EncryptionInfoEncryptionTypeEnum;
    kmsKeyVersion?: string;
}
/**
 * Encryption information for a Cloud Spanner database or backup.
**/
export declare class EncryptionInfoInput extends SpeakeasyBase {
    encryptionStatus?: Status;
}
