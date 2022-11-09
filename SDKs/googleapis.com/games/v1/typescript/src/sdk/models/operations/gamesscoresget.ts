import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GamesScoresGetTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    All = "ALL"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


export class GamesScoresGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" })
  leaderboardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerId" })
  playerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=timeSpan" })
  timeSpan: GamesScoresGetTimeSpanEnum;
}

export enum GamesScoresGetIncludeRankTypeEnum {
    IncludeRankTypeUnspecified = "INCLUDE_RANK_TYPE_UNSPECIFIED"
,    All = "ALL"
,    Public = "PUBLIC"
,    Social = "SOCIAL"
,    Friends = "FRIENDS"
}


export class GamesScoresGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeRankType" })
  includeRankType?: GamesScoresGetIncludeRankTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class GamesScoresGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GamesScoresGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesScoresGetPathParams;

  @Metadata()
  queryParams: GamesScoresGetQueryParams;

  @Metadata()
  security: GamesScoresGetSecurity;
}


export class GamesScoresGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerLeaderboardScoreListResponse?: shared.PlayerLeaderboardScoreListResponse;

  @Metadata()
  statusCode: number;
}
