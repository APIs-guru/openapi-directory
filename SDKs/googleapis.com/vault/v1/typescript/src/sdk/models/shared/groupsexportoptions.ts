import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GroupsExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED"
,    Mbox = "MBOX"
,    Pst = "PST"
}


// GroupsExportOptions
/** 
 * Options for Groups exports.
**/
export class GroupsExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportFormat" })
  exportFormat?: GroupsExportOptionsExportFormatEnum;
}
