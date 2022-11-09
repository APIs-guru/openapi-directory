import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountInfo } from "./accountinfo";
import { DriveOptions } from "./driveoptions";
import { HangoutsChatInfo } from "./hangoutschatinfo";
import { HangoutsChatOptions } from "./hangoutschatoptions";
import { MailOptions } from "./mailoptions";
import { OrgUnitInfo } from "./orgunitinfo";
import { SharedDriveInfo } from "./shareddriveinfo";
import { SitesUrlInfo } from "./sitesurlinfo";
import { TeamDriveInfo } from "./teamdriveinfo";
import { VoiceOptions } from "./voiceoptions";
export declare enum QueryCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED",
    Drive = "DRIVE",
    Mail = "MAIL",
    Groups = "GROUPS",
    HangoutsChat = "HANGOUTS_CHAT",
    Voice = "VOICE"
}
export declare enum QueryDataScopeEnum {
    DataScopeUnspecified = "DATA_SCOPE_UNSPECIFIED",
    AllData = "ALL_DATA",
    HeldData = "HELD_DATA",
    UnprocessedData = "UNPROCESSED_DATA"
}
export declare enum QueryMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}
export declare enum QuerySearchMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}
/**
 * The query definition used for search and export.
**/
export declare class Query extends SpeakeasyBase {
    accountInfo?: AccountInfo;
    corpus?: QueryCorpusEnum;
    dataScope?: QueryDataScopeEnum;
    driveOptions?: DriveOptions;
    endTime?: string;
    hangoutsChatInfo?: HangoutsChatInfo;
    hangoutsChatOptions?: HangoutsChatOptions;
    mailOptions?: MailOptions;
    method?: QueryMethodEnum;
    orgUnitInfo?: OrgUnitInfo;
    searchMethod?: QuerySearchMethodEnum;
    sharedDriveInfo?: SharedDriveInfo;
    sitesUrlInfo?: SitesUrlInfo;
    startTime?: string;
    teamDriveInfo?: TeamDriveInfo;
    terms?: string;
    timeZone?: string;
    voiceOptions?: VoiceOptions;
}
