import { SpeakeasyBase } from "../../../internal/utils";
import { FilesystemEnum } from "./filesystemenum";
export declare class BackupDisks extends SpeakeasyBase {
    filesystem?: FilesystemEnum;
    label?: string;
    size?: number;
}
export declare enum BackupStatusEnum {
    Paused = "paused",
    Pending = "pending",
    Running = "running",
    NeedsPostProcessing = "needsPostProcessing",
    Successful = "successful",
    Failed = "failed",
    UserAborted = "userAborted"
}
export declare enum BackupTypeEnum {
    Auto = "auto",
    Snapshot = "snapshot"
}
/**
 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
 *
**/
export declare class Backup extends SpeakeasyBase {
    configs?: string[];
    created?: Date;
    disks?: BackupDisks[];
    finished?: Date;
    id?: number;
    label?: string;
    status?: BackupStatusEnum;
    type?: BackupTypeEnum;
    updated?: Date;
}
