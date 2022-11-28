import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
import { EncryptionInfoInput } from "./encryptioninfo";


export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}


// Backup
/** 
 * A backup of a Cloud Bigtable table.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceTable" })
  sourceTable?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;
}


// BackupInput
/** 
 * A backup of a Cloud Bigtable table.
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfoInput;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceTable" })
  sourceTable?: string;
}
