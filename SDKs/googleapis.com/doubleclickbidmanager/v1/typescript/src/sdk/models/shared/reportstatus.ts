import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFailure } from "./reportfailure";


export enum ReportStatusFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}

export enum ReportStatusStateEnum {
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}


// ReportStatus
/** 
 * Report status.
**/
export class ReportStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failure" })
  failure?: ReportFailure;

  @SpeakeasyMetadata({ data: "json, name=finishTimeMs" })
  finishTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: ReportStatusFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ReportStatusStateEnum;
}
