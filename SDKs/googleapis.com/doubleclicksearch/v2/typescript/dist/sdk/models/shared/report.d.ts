import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRequest } from "./reportrequest";
export declare class ReportFiles extends SpeakeasyBase {
    byteCount?: string;
    url?: string;
}
/**
 * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
**/
export declare class Report extends SpeakeasyBase {
    files?: ReportFiles[];
    id?: string;
    isReportReady?: boolean;
    kind?: string;
    request?: ReportRequest;
    rowCount?: number;
    rows?: Map<string, any>[];
    statisticsCurrencyCode?: string;
    statisticsTimeZone?: string;
}
