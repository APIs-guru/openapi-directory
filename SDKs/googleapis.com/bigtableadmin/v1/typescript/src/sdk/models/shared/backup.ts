import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionInfo } from "./encryptioninfo";

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
}


// Backup
/** 
 * A backup of a Cloud Bigtable table.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=sourceTable" })
  sourceTable?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;
}
