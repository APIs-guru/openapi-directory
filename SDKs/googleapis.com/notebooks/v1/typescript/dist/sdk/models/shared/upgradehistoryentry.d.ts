import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum UpgradeHistoryEntryActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Rollback = "ROLLBACK"
}
export declare enum UpgradeHistoryEntryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The entry of VM image upgrade history.
**/
export declare class UpgradeHistoryEntry extends SpeakeasyBase {
    action?: UpgradeHistoryEntryActionEnum;
    containerImage?: string;
    createTime?: string;
    framework?: string;
    snapshot?: string;
    state?: UpgradeHistoryEntryStateEnum;
    targetImage?: string;
    targetVersion?: string;
    version?: string;
    vmImage?: string;
}
