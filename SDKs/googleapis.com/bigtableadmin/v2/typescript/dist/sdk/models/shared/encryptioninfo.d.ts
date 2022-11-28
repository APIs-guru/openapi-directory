import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum EncryptionInfoEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
**/
export declare class EncryptionInfoInput extends SpeakeasyBase {
    encryptionStatus?: Status;
}
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
**/
export declare class EncryptionInfo extends SpeakeasyBase {
    encryptionStatus?: Status;
    encryptionType?: EncryptionInfoEncryptionTypeEnum;
    kmsKeyVersion?: string;
}
