import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRequest } from "./reportrequest";



export class ReportFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteCount" })
  byteCount?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// Report
/** 
 * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: ReportFiles })
  files?: ReportFiles[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isReportReady" })
  isReportReady?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: ReportRequest;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=statisticsCurrencyCode" })
  statisticsCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statisticsTimeZone" })
  statisticsTimeZone?: string;
}
