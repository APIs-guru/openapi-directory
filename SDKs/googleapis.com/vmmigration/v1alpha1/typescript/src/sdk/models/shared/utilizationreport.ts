import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { VmUtilizationInfo } from "./vmutilizationinfo";
import { VmUtilizationInfoInput } from "./vmutilizationinfo";


export enum UtilizationReportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}

export enum UtilizationReportTimeFrameEnum {
    TimeFrameUnspecified = "TIME_FRAME_UNSPECIFIED",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}


// UtilizationReport
/** 
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
export class UtilizationReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=frameEndTime" })
  frameEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: UtilizationReportStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timeFrame" })
  timeFrame?: UtilizationReportTimeFrameEnum;

  @SpeakeasyMetadata({ data: "json, name=vmCount" })
  vmCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vms", elemType: VmUtilizationInfo })
  vms?: VmUtilizationInfo[];

  @SpeakeasyMetadata({ data: "json, name=vmsCount" })
  vmsCount?: number;
}


// UtilizationReportInput
/** 
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
export class UtilizationReportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=timeFrame" })
  timeFrame?: UtilizationReportTimeFrameEnum;

  @SpeakeasyMetadata({ data: "json, name=vms", elemType: VmUtilizationInfoInput })
  vms?: VmUtilizationInfoInput[];
}
