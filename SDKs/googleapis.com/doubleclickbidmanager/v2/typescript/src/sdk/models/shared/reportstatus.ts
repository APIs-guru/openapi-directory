import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReportStatusFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}

export enum ReportStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}


// ReportStatus
/** 
 * Report status.
**/
export class ReportStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finishTime" })
  finishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: ReportStatusFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ReportStatusStateEnum;
}
