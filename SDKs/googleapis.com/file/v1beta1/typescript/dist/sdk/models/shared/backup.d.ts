import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BackupSourceInstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Finalizing = "FINALIZING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore backup.
**/
export declare class Backup extends SpeakeasyBase {
    capacityGb?: string;
    createTime?: string;
    description?: string;
    downloadBytes?: string;
    kmsKeyName?: string;
    labels?: Map<string, string>;
    name?: string;
    satisfiesPzs?: boolean;
    sourceFileShare?: string;
    sourceInstance?: string;
    sourceInstanceTier?: BackupSourceInstanceTierEnum;
    state?: BackupStateEnum;
    storageBytes?: string;
}
