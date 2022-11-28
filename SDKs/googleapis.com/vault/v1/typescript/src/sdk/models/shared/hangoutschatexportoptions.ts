import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HangoutsChatExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}


// HangoutsChatExportOptions
/** 
 * Options for Chat exports.
**/
export class HangoutsChatExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportFormat" })
  exportFormat?: HangoutsChatExportOptionsExportFormatEnum;
}
