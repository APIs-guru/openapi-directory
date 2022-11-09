import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GamesScoresListWindowCollectionEnum {
    ScoreCollectionUnspecified = "SCORE_COLLECTION_UNSPECIFIED"
,    Public = "PUBLIC"
,    Social = "SOCIAL"
,    Friends = "FRIENDS"
}


export class GamesScoresListWindowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: GamesScoresListWindowCollectionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" })
  leaderboardId: string;
}

export enum GamesScoresListWindowTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED"
,    AllTime = "ALL_TIME"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
}


export class GamesScoresListWindowQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=resultsAbove" })
  resultsAbove?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnTopIfAbsent" })
  returnTopIfAbsent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeSpan" })
  timeSpan: GamesScoresListWindowTimeSpanEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class GamesScoresListWindowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GamesScoresListWindowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesScoresListWindowPathParams;

  @Metadata()
  queryParams: GamesScoresListWindowQueryParams;

  @Metadata()
  security: GamesScoresListWindowSecurity;
}


export class GamesScoresListWindowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  leaderboardScores?: shared.LeaderboardScores;

  @Metadata()
  statusCode: number;
}
