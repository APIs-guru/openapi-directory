import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFailure } from "./reportfailure";

export enum ReportStatusFormatEnum {
    Csv = "CSV"
,    ExcelCsv = "EXCEL_CSV"
,    Xlsx = "XLSX"
}

export enum ReportStatusStateEnum {
    Running = "RUNNING"
,    Done = "DONE"
,    Failed = "FAILED"
}


// ReportStatus
/** 
 * Report status.
**/
export class ReportStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=failure" })
  failure?: ReportFailure;

  @Metadata({ data: "json, name=finishTimeMs" })
  finishTimeMs?: string;

  @Metadata({ data: "json, name=format" })
  format?: ReportStatusFormatEnum;

  @Metadata({ data: "json, name=state" })
  state?: ReportStatusStateEnum;
}
