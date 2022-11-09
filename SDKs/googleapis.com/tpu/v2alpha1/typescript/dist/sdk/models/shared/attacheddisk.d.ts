import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AttachedDiskModeEnum {
    DiskModeUnspecified = "DISK_MODE_UNSPECIFIED",
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY"
}
/**
 * A node-attached disk resource. Next ID: 8;
**/
export declare class AttachedDisk extends SpeakeasyBase {
    mode?: AttachedDiskModeEnum;
    sourceDisk?: string;
}
