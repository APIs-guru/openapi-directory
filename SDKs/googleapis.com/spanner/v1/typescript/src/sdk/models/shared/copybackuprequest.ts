import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CopyBackupEncryptionConfig } from "./copybackupencryptionconfig";


// CopyBackupRequest
/** 
 * The request for CopyBackup.
**/
export class CopyBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupId" })
  backupId?: string;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: CopyBackupEncryptionConfig;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}
