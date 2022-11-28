import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RestoreDatabaseEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    UseConfigDefaultOrBackupEncryption = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
/**
 * Encryption configuration for the restored database.
**/
export declare class RestoreDatabaseEncryptionConfig extends SpeakeasyBase {
    encryptionType?: RestoreDatabaseEncryptionConfigEncryptionTypeEnum;
    kmsKeyName?: string;
}
