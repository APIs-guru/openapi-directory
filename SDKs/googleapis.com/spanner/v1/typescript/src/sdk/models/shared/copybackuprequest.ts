import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyBackupEncryptionConfig } from "./copybackupencryptionconfig";



// CopyBackupRequest
/** 
 * The request for CopyBackup.
**/
export class CopyBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: CopyBackupEncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}
