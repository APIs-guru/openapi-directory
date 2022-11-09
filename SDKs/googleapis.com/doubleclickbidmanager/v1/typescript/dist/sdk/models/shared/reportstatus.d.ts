import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFailure } from "./reportfailure";
export declare enum ReportStatusFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}
export declare enum ReportStatusStateEnum {
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}
/**
 * Report status.
**/
export declare class ReportStatus extends SpeakeasyBase {
    failure?: ReportFailure;
    finishTimeMs?: string;
    format?: ReportStatusFormatEnum;
    state?: ReportStatusStateEnum;
}
