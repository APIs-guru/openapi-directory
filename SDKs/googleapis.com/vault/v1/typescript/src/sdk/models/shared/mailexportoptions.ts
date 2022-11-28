import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MailExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}


// MailExportOptions
/** 
 * Options for Gmail exports.
**/
export class MailExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportFormat" })
  exportFormat?: MailExportOptionsExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=showConfidentialModeContent" })
  showConfidentialModeContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useNewExport" })
  useNewExport?: boolean;
}
