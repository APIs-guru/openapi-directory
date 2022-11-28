import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionSettings } from "./backupretentionsettings";



// BackupConfiguration
/** 
 * Database instance backup configuration.
**/
export class BackupConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupRetentionSettings" })
  backupRetentionSettings?: BackupRetentionSettings;

  @SpeakeasyMetadata({ data: "json, name=binaryLogEnabled" })
  binaryLogEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=pointInTimeRecoveryEnabled" })
  pointInTimeRecoveryEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replicationLogArchivingEnabled" })
  replicationLogArchivingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionLogRetentionDays" })
  transactionLogRetentionDays?: number;
}
