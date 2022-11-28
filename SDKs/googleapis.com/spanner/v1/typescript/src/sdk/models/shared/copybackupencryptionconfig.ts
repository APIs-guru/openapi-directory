import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CopyBackupEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    UseConfigDefaultOrBackupEncryption = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


// CopyBackupEncryptionConfig
/** 
 * Encryption configuration for the copied backup.
**/
export class CopyBackupEncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType?: CopyBackupEncryptionConfigEncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
