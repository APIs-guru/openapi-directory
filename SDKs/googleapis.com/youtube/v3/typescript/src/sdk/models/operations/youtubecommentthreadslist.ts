import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum YoutubeCommentThreadsListModerationStatusEnum {
    Published = "published"
,    HeldForReview = "heldForReview"
,    LikelySpam = "likelySpam"
,    Rejected = "rejected"
}

export enum YoutubeCommentThreadsListOrderEnum {
    OrderUnspecified = "orderUnspecified"
,    Time = "time"
,    Relevance = "relevance"
}

export enum YoutubeCommentThreadsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified"
,    Html = "html"
,    PlainText = "plainText"
}


export class YoutubeCommentThreadsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allThreadsRelatedToChannelId" })
  allThreadsRelatedToChannelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=moderationStatus" })
  moderationStatus?: YoutubeCommentThreadsListModerationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: YoutubeCommentThreadsListOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textFormat" })
  textFormat?: YoutubeCommentThreadsListTextFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoId" })
  videoId?: string;
}


export class YoutubeCommentThreadsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeCommentThreadsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: YoutubeCommentThreadsListQueryParams;

  @Metadata()
  security: YoutubeCommentThreadsListSecurity;
}


export class YoutubeCommentThreadsListResponse extends SpeakeasyBase {
  @Metadata()
  commentThreadListResponse?: shared.CommentThreadListResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
