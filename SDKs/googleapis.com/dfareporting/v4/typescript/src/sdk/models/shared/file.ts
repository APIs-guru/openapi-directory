import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";


export enum FileFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}

export enum FileStatusEnum {
    Processing = "PROCESSING",
    ReportAvailable = "REPORT_AVAILABLE",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Queued = "QUEUED"
}


// FileUrls
/** 
 * The URLs where the completed report file can be downloaded.
**/
export class FileUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiUrl" })
  apiUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=browserUrl" })
  browserUrl?: string;
}


// File
/** 
 * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: FileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FileStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: FileUrls;
}
