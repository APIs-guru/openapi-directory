import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestoreDatabaseEncryptionConfigEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED"
,    UseConfigDefaultOrBackupEncryption = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
,    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION"
,    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}


// RestoreDatabaseEncryptionConfig
/** 
 * Encryption configuration for the restored database.
**/
export class RestoreDatabaseEncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: RestoreDatabaseEncryptionConfigEncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
