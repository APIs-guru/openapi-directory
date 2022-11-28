import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiskFilesystemEnum {
    Raw = "raw",
    Swap = "swap",
    Ext3 = "ext3",
    Ext4 = "ext4",
    Initrd = "initrd"
}
export declare enum DiskStatusEnum {
    Ready = "ready",
    NotReady = "not ready",
    Deleting = "deleting"
}
export declare class DiskInput extends SpeakeasyBase {
    filesystem?: DiskFilesystemEnum;
    label?: string;
    size?: number;
}
export declare class Disk extends SpeakeasyBase {
    created?: Date;
    filesystem?: DiskFilesystemEnum;
    id?: number;
    label?: string;
    size?: number;
    status?: DiskStatusEnum;
    updated?: Date;
}
