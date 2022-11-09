import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReportStatusFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    Csv = "CSV"
,    Xlsx = "XLSX"
}

export enum ReportStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Queued = "QUEUED"
,    Running = "RUNNING"
,    Done = "DONE"
,    Failed = "FAILED"
}


// ReportStatus
/** 
 * Report status.
**/
export class ReportStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=finishTime" })
  finishTime?: string;

  @Metadata({ data: "json, name=format" })
  format?: ReportStatusFormatEnum;

  @Metadata({ data: "json, name=state" })
  state?: ReportStatusStateEnum;
}
