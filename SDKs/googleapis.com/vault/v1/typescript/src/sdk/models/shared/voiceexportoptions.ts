import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VoiceExportOptionsExportFormatEnum {
    ExportFormatUnspecified = "EXPORT_FORMAT_UNSPECIFIED"
,    Mbox = "MBOX"
,    Pst = "PST"
}


// VoiceExportOptions
/** 
 * The options for Voice exports.
**/
export class VoiceExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportFormat" })
  exportFormat?: VoiceExportOptionsExportFormatEnum;
}
