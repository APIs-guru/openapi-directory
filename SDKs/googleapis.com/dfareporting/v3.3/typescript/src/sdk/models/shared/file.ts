import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";

export enum FileFormatEnum {
    Csv = "CSV"
,    Excel = "EXCEL"
}

export enum FileStatusEnum {
    Processing = "PROCESSING"
,    ReportAvailable = "REPORT_AVAILABLE"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


// FileUrls
/** 
 * The URLs where the completed report file can be downloaded.
**/
export class FileUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiUrl" })
  apiUrl?: string;

  @Metadata({ data: "json, name=browserUrl" })
  browserUrl?: string;
}


// File
/** 
 * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=format" })
  format?: FileFormatEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=reportId" })
  reportId?: string;

  @Metadata({ data: "json, name=status" })
  status?: FileStatusEnum;

  @Metadata({ data: "json, name=urls" })
  urls?: FileUrls;
}
