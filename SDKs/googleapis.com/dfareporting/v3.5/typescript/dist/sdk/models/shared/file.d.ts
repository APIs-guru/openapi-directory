import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
export declare enum FileFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}
export declare enum FileStatusEnum {
    Processing = "PROCESSING",
    ReportAvailable = "REPORT_AVAILABLE",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * The URLs where the completed report file can be downloaded.
**/
export declare class FileUrls extends SpeakeasyBase {
    apiUrl?: string;
    browserUrl?: string;
}
/**
 * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
**/
export declare class File extends SpeakeasyBase {
    dateRange?: DateRange;
    etag?: string;
    fileName?: string;
    format?: FileFormatEnum;
    id?: string;
    kind?: string;
    lastModifiedTime?: string;
    reportId?: string;
    status?: FileStatusEnum;
    urls?: FileUrls;
}
