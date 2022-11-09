import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveExportOptions } from "./driveexportoptions";
import { GroupsExportOptions } from "./groupsexportoptions";
import { HangoutsChatExportOptions } from "./hangoutschatexportoptions";
import { MailExportOptions } from "./mailexportoptions";
import { VoiceExportOptions } from "./voiceexportoptions";

export enum ExportOptionsRegionEnum {
    ExportRegionUnspecified = "EXPORT_REGION_UNSPECIFIED"
,    Any = "ANY"
,    Us = "US"
,    Europe = "EUROPE"
}


// ExportOptions
/** 
 * Additional options for exports
**/
export class ExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveOptions" })
  driveOptions?: DriveExportOptions;

  @Metadata({ data: "json, name=groupsOptions" })
  groupsOptions?: GroupsExportOptions;

  @Metadata({ data: "json, name=hangoutsChatOptions" })
  hangoutsChatOptions?: HangoutsChatExportOptions;

  @Metadata({ data: "json, name=mailOptions" })
  mailOptions?: MailExportOptions;

  @Metadata({ data: "json, name=region" })
  region?: ExportOptionsRegionEnum;

  @Metadata({ data: "json, name=voiceOptions" })
  voiceOptions?: VoiceExportOptions;
}
