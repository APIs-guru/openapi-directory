import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupRetentionSettings } from "./backupretentionsettings";


// BackupConfiguration
/** 
 * Database instance backup configuration.
**/
export class BackupConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupRetentionSettings" })
  backupRetentionSettings?: BackupRetentionSettings;

  @Metadata({ data: "json, name=binaryLogEnabled" })
  binaryLogEnabled?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=pointInTimeRecoveryEnabled" })
  pointInTimeRecoveryEnabled?: boolean;

  @Metadata({ data: "json, name=replicationLogArchivingEnabled" })
  replicationLogArchivingEnabled?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=transactionLogRetentionDays" })
  transactionLogRetentionDays?: number;
}
