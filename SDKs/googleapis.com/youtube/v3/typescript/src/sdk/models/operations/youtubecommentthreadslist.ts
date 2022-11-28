import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum YoutubeCommentThreadsListModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}

export enum YoutubeCommentThreadsListOrderEnum {
    OrderUnspecified = "orderUnspecified",
    Time = "time",
    Relevance = "relevance"
}

export enum YoutubeCommentThreadsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified",
    Html = "html",
    PlainText = "plainText"
}


export class YoutubeCommentThreadsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allThreadsRelatedToChannelId" })
  allThreadsRelatedToChannelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moderationStatus" })
  moderationStatus?: YoutubeCommentThreadsListModerationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: YoutubeCommentThreadsListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textFormat" })
  textFormat?: YoutubeCommentThreadsListTextFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" })
  videoId?: string;
}


export class YoutubeCommentThreadsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeCommentThreadsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeCommentThreadsListQueryParams;

  @SpeakeasyMetadata()
  security: YoutubeCommentThreadsListSecurity;
}


export class YoutubeCommentThreadsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentThreadListResponse?: shared.CommentThreadListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
