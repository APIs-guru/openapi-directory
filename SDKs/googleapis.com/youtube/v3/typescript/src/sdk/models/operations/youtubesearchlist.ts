import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum YoutubeSearchListChannelTypeEnum {
    ChannelTypeUnspecified = "channelTypeUnspecified"
,    Any = "any"
,    Show = "show"
}

export enum YoutubeSearchListEventTypeEnum {
    None = "none"
,    Upcoming = "upcoming"
,    Live = "live"
,    Completed = "completed"
}

export enum YoutubeSearchListOrderEnum {
    SearchSortUnspecified = "searchSortUnspecified"
,    Date = "date"
,    Rating = "rating"
,    ViewCount = "viewCount"
,    Relevance = "relevance"
,    Title = "title"
,    VideoCount = "videoCount"
}

export enum YoutubeSearchListSafeSearchEnum {
    SafeSearchSettingUnspecified = "safeSearchSettingUnspecified"
,    None = "none"
,    Moderate = "moderate"
,    Strict = "strict"
}

export enum YoutubeSearchListVideoCaptionEnum {
    VideoCaptionUnspecified = "videoCaptionUnspecified"
,    Any = "any"
,    ClosedCaption = "closedCaption"
,    None = "none"
}

export enum YoutubeSearchListVideoDefinitionEnum {
    Any = "any"
,    Standard = "standard"
,    High = "high"
}

export enum YoutubeSearchListVideoDimensionEnum {
    Any = "any"
,    Twod = "2d"
,    Threed = "3d"
}

export enum YoutubeSearchListVideoDurationEnum {
    VideoDurationUnspecified = "videoDurationUnspecified"
,    Any = "any"
,    Short = "short"
,    Medium = "medium"
,    Long = "long"
}

export enum YoutubeSearchListVideoEmbeddableEnum {
    VideoEmbeddableUnspecified = "videoEmbeddableUnspecified"
,    Any = "any"
,    True = "true"
}

export enum YoutubeSearchListVideoLicenseEnum {
    Any = "any"
,    Youtube = "youtube"
,    CreativeCommon = "creativeCommon"
}

export enum YoutubeSearchListVideoSyndicatedEnum {
    VideoSyndicatedUnspecified = "videoSyndicatedUnspecified"
,    Any = "any"
,    True = "true"
}

export enum YoutubeSearchListVideoTypeEnum {
    VideoTypeUnspecified = "videoTypeUnspecified"
,    Any = "any"
,    Movie = "movie"
,    Episode = "episode"
}


export class YoutubeSearchListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channelType" })
  channelType?: YoutubeSearchListChannelTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=eventType" })
  eventType?: YoutubeSearchListEventTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forContentOwner" })
  forContentOwner?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forDeveloper" })
  forDeveloper?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=forMine" })
  forMine?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationRadius" })
  locationRadius?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: YoutubeSearchListOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publishedAfter" })
  publishedAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publishedBefore" })
  publishedBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relatedToVideoId" })
  relatedToVideoId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relevanceLanguage" })
  relevanceLanguage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safeSearch" })
  safeSearch?: YoutubeSearchListSafeSearchEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topicId" })
  topicId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoCaption" })
  videoCaption?: YoutubeSearchListVideoCaptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoCategoryId" })
  videoCategoryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoDefinition" })
  videoDefinition?: YoutubeSearchListVideoDefinitionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoDimension" })
  videoDimension?: YoutubeSearchListVideoDimensionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoDuration" })
  videoDuration?: YoutubeSearchListVideoDurationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoEmbeddable" })
  videoEmbeddable?: YoutubeSearchListVideoEmbeddableEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoLicense" })
  videoLicense?: YoutubeSearchListVideoLicenseEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoSyndicated" })
  videoSyndicated?: YoutubeSearchListVideoSyndicatedEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoType" })
  videoType?: YoutubeSearchListVideoTypeEnum;
}


export class YoutubeSearchListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: YoutubeSearchListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: YoutubeSearchListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: YoutubeSearchListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: YoutubeSearchListSecurityOption4;
}


export class YoutubeSearchListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: YoutubeSearchListQueryParams;

  @Metadata()
  security: YoutubeSearchListSecurity;
}


export class YoutubeSearchListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchListResponse?: shared.SearchListResponse;

  @Metadata()
  statusCode: number;
}
