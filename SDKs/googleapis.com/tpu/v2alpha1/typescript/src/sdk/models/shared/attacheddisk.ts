import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttachedDiskModeEnum {
    DiskModeUnspecified = "DISK_MODE_UNSPECIFIED",
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY"
}


// AttachedDisk
/** 
 * A node-attached disk resource. Next ID: 8;
**/
export class AttachedDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: AttachedDiskModeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceDisk" })
  sourceDisk?: string;
}
