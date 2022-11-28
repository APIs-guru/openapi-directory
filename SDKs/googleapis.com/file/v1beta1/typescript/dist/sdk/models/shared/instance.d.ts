import { SpeakeasyBase } from "../../../internal/utils";
import { FileShareConfig } from "./fileshareconfig";
import { NetworkConfig } from "./networkconfig";
import { NetworkConfigInput } from "./networkconfig";
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Repairing = "REPAIRING",
    Deleting = "DELETING",
    Error = "ERROR",
    Restoring = "RESTORING",
    Suspended = "SUSPENDED",
    Reverting = "REVERTING",
    Suspending = "SUSPENDING",
    Resuming = "RESUMING"
}
export declare enum InstanceSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
export declare enum InstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}
/**
 * A Filestore instance.
**/
export declare class Instance extends SpeakeasyBase {
    capacityGb?: string;
    capacityStepSizeGb?: string;
    createTime?: string;
    description?: string;
    etag?: string;
    fileShares?: FileShareConfig[];
    kmsKeyName?: string;
    labels?: Map<string, string>;
    maxCapacityGb?: string;
    maxShareCount?: string;
    multiShareEnabled?: boolean;
    name?: string;
    networks?: NetworkConfig[];
    satisfiesPzs?: boolean;
    state?: InstanceStateEnum;
    statusMessage?: string;
    suspensionReasons?: InstanceSuspensionReasonsEnum[];
    tier?: InstanceTierEnum;
}
/**
 * A Filestore instance.
**/
export declare class InstanceInput extends SpeakeasyBase {
    capacityGb?: string;
    description?: string;
    etag?: string;
    fileShares?: FileShareConfig[];
    kmsKeyName?: string;
    labels?: Map<string, string>;
    multiShareEnabled?: boolean;
    networks?: NetworkConfigInput[];
    tier?: InstanceTierEnum;
}
