import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * The options for Voice exports.
**/
export declare class VoiceExportOptions extends SpeakeasyBase {
    exportFormat?: VoiceExportOptionsExportFormatEnum;
}
