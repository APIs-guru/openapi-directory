import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum HangoutsChatExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Chat exports.
**/
export declare class HangoutsChatExportOptions extends SpeakeasyBase {
    exportFormat?: HangoutsChatExportOptionsExportFormatEnum;
}
