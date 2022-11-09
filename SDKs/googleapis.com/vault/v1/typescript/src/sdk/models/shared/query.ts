import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum QueryCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED"
,    Drive = "DRIVE"
,    Mail = "MAIL"
,    Groups = "GROUPS"
,    HangoutsChat = "HANGOUTS_CHAT"
,    Voice = "VOICE"
}

export enum QueryDataScopeEnum {
    DataScopeUnspecified = "DATA_SCOPE_UNSPECIFIED"
,    AllData = "ALL_DATA"
,    HeldData = "HELD_DATA"
,    UnprocessedData = "UNPROCESSED_DATA"
}

export enum QueryMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED"
,    Account = "ACCOUNT"
,    OrgUnit = "ORG_UNIT"
,    TeamDrive = "TEAM_DRIVE"
,    EntireOrg = "ENTIRE_ORG"
,    Room = "ROOM"
,    SitesUrl = "SITES_URL"
,    SharedDrive = "SHARED_DRIVE"
}

export enum QuerySearchMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED"
,    Account = "ACCOUNT"
,    OrgUnit = "ORG_UNIT"
,    TeamDrive = "TEAM_DRIVE"
,    EntireOrg = "ENTIRE_ORG"
,    Room = "ROOM"
,    SitesUrl = "SITES_URL"
,    SharedDrive = "SHARED_DRIVE"
}


// Query
/** 
 * The query definition used for search and export.
**/
export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountInfo" })
  accountInfo?: AccountInfo;

  @Metadata({ data: "json, name=corpus" })
  corpus?: QueryCorpusEnum;

  @Metadata({ data: "json, name=dataScope" })
  dataScope?: QueryDataScopeEnum;

  @Metadata({ data: "json, name=driveOptions" })
  driveOptions?: DriveOptions;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=hangoutsChatInfo" })
  hangoutsChatInfo?: HangoutsChatInfo;

  @Metadata({ data: "json, name=hangoutsChatOptions" })
  hangoutsChatOptions?: HangoutsChatOptions;

  @Metadata({ data: "json, name=mailOptions" })
  mailOptions?: MailOptions;

  @Metadata({ data: "json, name=method" })
  method?: QueryMethodEnum;

  @Metadata({ data: "json, name=orgUnitInfo" })
  orgUnitInfo?: OrgUnitInfo;

  @Metadata({ data: "json, name=searchMethod" })
  searchMethod?: QuerySearchMethodEnum;

  @Metadata({ data: "json, name=sharedDriveInfo" })
  sharedDriveInfo?: SharedDriveInfo;

  @Metadata({ data: "json, name=sitesUrlInfo" })
  sitesUrlInfo?: SitesUrlInfo;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=teamDriveInfo" })
  teamDriveInfo?: TeamDriveInfo;

  @Metadata({ data: "json, name=terms" })
  terms?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=voiceOptions" })
  voiceOptions?: VoiceOptions;
}
