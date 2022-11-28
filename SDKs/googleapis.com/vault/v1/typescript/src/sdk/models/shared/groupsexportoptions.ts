import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupsExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}


// GroupsExportOptions
/** 
 * Options for Groups exports.
**/
export class GroupsExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportFormat" })
  exportFormat?: GroupsExportOptionsExportFormatEnum;
}
