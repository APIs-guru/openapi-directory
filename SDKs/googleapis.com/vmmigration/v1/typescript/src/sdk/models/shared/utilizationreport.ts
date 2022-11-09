import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { VmUtilizationInfo } from "./vmutilizationinfo";

export enum UtilizationReportStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}

export enum UtilizationReportTimeFrameEnum {
    TimeFrameUnspecified = "TIME_FRAME_UNSPECIFIED"
,    Week = "WEEK"
,    Month = "MONTH"
,    Year = "YEAR"
}


// UtilizationReport
/** 
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
export class UtilizationReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=frameEndTime" })
  frameEndTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: UtilizationReportStateEnum;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @Metadata({ data: "json, name=timeFrame" })
  timeFrame?: UtilizationReportTimeFrameEnum;

  @Metadata({ data: "json, name=vmCount" })
  vmCount?: number;

  @Metadata({ data: "json, name=vms", elemType: shared.VmUtilizationInfo })
  vms?: VmUtilizationInfo[];
}
