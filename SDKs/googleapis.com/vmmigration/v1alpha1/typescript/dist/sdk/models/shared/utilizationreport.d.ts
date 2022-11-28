import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { VmUtilizationInfo } from "./vmutilizationinfo";
import { VmUtilizationInfoInput } from "./vmutilizationinfo";
export declare enum UtilizationReportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare enum UtilizationReportTimeFrameEnum {
    TimeFrameUnspecified = "TIME_FRAME_UNSPECIFIED",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
export declare class UtilizationReport extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    error?: Status;
    frameEndTime?: string;
    name?: string;
    state?: UtilizationReportStateEnum;
    stateTime?: string;
    timeFrame?: UtilizationReportTimeFrameEnum;
    vmCount?: number;
    vms?: VmUtilizationInfo[];
    vmsCount?: number;
}
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
export declare class UtilizationReportInput extends SpeakeasyBase {
    displayName?: string;
    error?: Status;
    timeFrame?: UtilizationReportTimeFrameEnum;
    vms?: VmUtilizationInfoInput[];
}
