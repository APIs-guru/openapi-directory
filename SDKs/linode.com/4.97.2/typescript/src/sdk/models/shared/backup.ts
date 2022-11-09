import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilesystemEnum } from "./filesystemenum";


export class BackupDisks extends SpeakeasyBase {
  @Metadata({ data: "json, name=filesystem" })
  filesystem?: FilesystemEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;
}

export enum BackupStatusEnum {
    Paused = "paused"
,    Pending = "pending"
,    Running = "running"
,    NeedsPostProcessing = "needsPostProcessing"
,    Successful = "successful"
,    Failed = "failed"
,    UserAborted = "userAborted"
}

export enum BackupTypeEnum {
    Auto = "auto"
,    Snapshot = "snapshot"
}


// Backup
/** 
 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
 * 
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs" })
  configs?: string[];

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=disks", elemType: shared.BackupDisks })
  disks?: BackupDisks[];

  @Metadata({ data: "json, name=finished" })
  finished?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=status" })
  status?: BackupStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: BackupTypeEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
