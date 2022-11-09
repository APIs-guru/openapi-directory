import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRequest } from "./reportrequest";


export class ReportFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteCount" })
  byteCount?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// Report
/** 
 * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.ReportFiles })
  files?: ReportFiles[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isReportReady" })
  isReportReady?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=request" })
  request?: ReportRequest;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=rows" })
  rows?: Map<string, any>[];

  @Metadata({ data: "json, name=statisticsCurrencyCode" })
  statisticsCurrencyCode?: string;

  @Metadata({ data: "json, name=statisticsTimeZone" })
  statisticsTimeZone?: string;
}
