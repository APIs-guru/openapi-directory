import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AttachedDiskModeEnum {
    DiskModeUnspecified = "DISK_MODE_UNSPECIFIED"
,    ReadWrite = "READ_WRITE"
,    ReadOnly = "READ_ONLY"
}


// AttachedDisk
/** 
 * A node-attached disk resource. Next ID: 8;
**/
export class AttachedDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: AttachedDiskModeEnum;

  @Metadata({ data: "json, name=sourceDisk" })
  sourceDisk?: string;
}
