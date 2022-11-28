import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VoiceExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED",
    Mbox = "MBOX",
    Pst = "PST"
}


// VoiceExportOptions
/** 
 * The options for Voice exports.
**/
export class VoiceExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportFormat" })
  exportFormat?: VoiceExportOptionsExportFormatEnum;
}
