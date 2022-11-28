import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING"
}
export declare enum BackupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Scheduled = "SCHEDULED"
}
/**
 * Represents a Managed Microsoft Identities backup.
**/
export declare class BackupInput extends SpeakeasyBase {
    labels?: Map<string, string>;
}
/**
 * Represents a Managed Microsoft Identities backup.
**/
export declare class Backup extends SpeakeasyBase {
    createTime?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: BackupStateEnum;
    statusMessage?: string;
    type?: BackupTypeEnum;
    updateTime?: string;
}
