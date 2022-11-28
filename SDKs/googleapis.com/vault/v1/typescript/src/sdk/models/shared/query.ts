import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED",
    Drive = "DRIVE",
    Mail = "MAIL",
    Groups = "GROUPS",
    HangoutsChat = "HANGOUTS_CHAT",
    Voice = "VOICE"
}

export enum QueryDataScopeEnum {
    DataScopeUnspecified = "DATA_SCOPE_UNSPECIFIED",
    AllData = "ALL_DATA",
    HeldData = "HELD_DATA",
    UnprocessedData = "UNPROCESSED_DATA"
}

export enum QueryMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}

export enum QuerySearchMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}


// Query
/** 
 * The query definition used for search and export.
**/
export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountInfo" })
  accountInfo?: AccountInfo;

  @SpeakeasyMetadata({ data: "json, name=corpus" })
  corpus?: QueryCorpusEnum;

  @SpeakeasyMetadata({ data: "json, name=dataScope" })
  dataScope?: QueryDataScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=driveOptions" })
  driveOptions?: DriveOptions;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hangoutsChatInfo" })
  hangoutsChatInfo?: HangoutsChatInfo;

  @SpeakeasyMetadata({ data: "json, name=hangoutsChatOptions" })
  hangoutsChatOptions?: HangoutsChatOptions;

  @SpeakeasyMetadata({ data: "json, name=mailOptions" })
  mailOptions?: MailOptions;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: QueryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=orgUnitInfo" })
  orgUnitInfo?: OrgUnitInfo;

  @SpeakeasyMetadata({ data: "json, name=searchMethod" })
  searchMethod?: QuerySearchMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sharedDriveInfo" })
  sharedDriveInfo?: SharedDriveInfo;

  @SpeakeasyMetadata({ data: "json, name=sitesUrlInfo" })
  sitesUrlInfo?: SitesUrlInfo;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDriveInfo" })
  teamDriveInfo?: TeamDriveInfo;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=voiceOptions" })
  voiceOptions?: VoiceOptions;
}
