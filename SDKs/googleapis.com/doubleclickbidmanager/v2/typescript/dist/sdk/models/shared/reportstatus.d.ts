import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReportStatusFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}
export declare enum ReportStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}
/**
 * Report status.
**/
export declare class ReportStatus extends SpeakeasyBase {
    finishTime?: string;
    format?: ReportStatusFormatEnum;
    state?: ReportStatusStateEnum;
}
