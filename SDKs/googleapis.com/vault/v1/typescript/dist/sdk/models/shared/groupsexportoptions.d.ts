import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GroupsExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}
/**
 * Options for Groups exports.
**/
export declare class GroupsExportOptions extends SpeakeasyBase {
    exportFormat?: GroupsExportOptionsExportFormatEnum;
}
