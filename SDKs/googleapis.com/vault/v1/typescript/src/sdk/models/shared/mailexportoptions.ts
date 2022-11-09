import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MailExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED"
,    Mbox = "MBOX"
,    Pst = "PST"
}


// MailExportOptions
/** 
 * Options for Gmail exports.
**/
export class MailExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportFormat" })
  exportFormat?: MailExportOptionsExportFormatEnum;

  @Metadata({ data: "json, name=showConfidentialModeContent" })
  showConfidentialModeContent?: boolean;

  @Metadata({ data: "json, name=useNewExport" })
  useNewExport?: boolean;
}
