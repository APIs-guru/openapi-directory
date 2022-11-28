import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum UpgradeStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * UpgradeStatus contains information about upgradeAppliance operation.
**/
export declare class UpgradeStatus extends SpeakeasyBase {
    error?: Status;
    previousVersion?: string;
    startTime?: string;
    state?: UpgradeStatusStateEnum;
    version?: string;
}
