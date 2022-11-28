import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilesystemEnum } from "./filesystemenum";



export class BackupDisks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filesystem" })
  filesystem?: FilesystemEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}

export enum BackupStatusEnum {
    Paused = "paused",
    Pending = "pending",
    Running = "running",
    NeedsPostProcessing = "needsPostProcessing",
    Successful = "successful",
    Failed = "failed",
    UserAborted = "userAborted"
}

export enum BackupTypeEnum {
    Auto = "auto",
    Snapshot = "snapshot"
}


// Backup
/** 
 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
 * 
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: string[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: BackupDisks })
  disks?: BackupDisks[];

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BackupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BackupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
