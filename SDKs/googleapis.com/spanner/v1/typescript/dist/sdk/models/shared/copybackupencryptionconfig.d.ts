import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CopyBackupEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    UseConfigDefaultOrBackupEncryption = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
/**
 * Encryption configuration for the copied backup.
**/
export declare class CopyBackupEncryptionConfig extends SpeakeasyBase {
    encryptionType?: CopyBackupEncryptionConfigEncryptionTypeEnum;
    kmsKeyName?: string;
}
