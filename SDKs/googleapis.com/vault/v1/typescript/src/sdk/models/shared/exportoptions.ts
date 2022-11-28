import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveExportOptions } from "./driveexportoptions";
import { GroupsExportOptions } from "./groupsexportoptions";
import { HangoutsChatExportOptions } from "./hangoutschatexportoptions";
import { MailExportOptions } from "./mailexportoptions";
import { VoiceExportOptions } from "./voiceexportoptions";


export enum ExportOptionsRegionEnum {
    ExportRegionUnspecified = "EXPORT_REGION_UNSPECIFIED",
    Any = "ANY",
    Us = "US",
    Europe = "EUROPE"
}


// ExportOptions
/** 
 * Additional options for exports
**/
export class ExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveOptions" })
  driveOptions?: DriveExportOptions;

  @SpeakeasyMetadata({ data: "json, name=groupsOptions" })
  groupsOptions?: GroupsExportOptions;

  @SpeakeasyMetadata({ data: "json, name=hangoutsChatOptions" })
  hangoutsChatOptions?: HangoutsChatExportOptions;

  @SpeakeasyMetadata({ data: "json, name=mailOptions" })
  mailOptions?: MailExportOptions;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: ExportOptionsRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=voiceOptions" })
  voiceOptions?: VoiceExportOptions;
}
