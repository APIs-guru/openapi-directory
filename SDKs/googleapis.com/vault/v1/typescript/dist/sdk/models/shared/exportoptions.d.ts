import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveExportOptions } from "./driveexportoptions";
import { GroupsExportOptions } from "./groupsexportoptions";
import { HangoutsChatExportOptions } from "./hangoutschatexportoptions";
import { MailExportOptions } from "./mailexportoptions";
import { VoiceExportOptions } from "./voiceexportoptions";
export declare enum ExportOptionsRegionEnum {
    ExportRegionUnspecified = "EXPORT_REGION_UNSPECIFIED",
    Any = "ANY",
    Us = "US",
    Europe = "EUROPE"
}
/**
 * Additional options for exports
**/
export declare class ExportOptions extends SpeakeasyBase {
    driveOptions?: DriveExportOptions;
    groupsOptions?: GroupsExportOptions;
    hangoutsChatOptions?: HangoutsChatExportOptions;
    mailOptions?: MailExportOptions;
    region?: ExportOptionsRegionEnum;
    voiceOptions?: VoiceExportOptions;
}
