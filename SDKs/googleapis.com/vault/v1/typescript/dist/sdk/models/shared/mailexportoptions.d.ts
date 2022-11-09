import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MailExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Gmail exports.
**/
export declare class MailExportOptions extends SpeakeasyBase {
    exportFormat?: MailExportOptionsExportFormatEnum;
    showConfidentialModeContent?: boolean;
    useNewExport?: boolean;
}
