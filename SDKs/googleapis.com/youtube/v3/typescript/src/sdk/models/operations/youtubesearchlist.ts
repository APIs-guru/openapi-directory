import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum YoutubeSearchListChannelTypeEnum {
    ChannelTypeUnspecified = "channelTypeUnspecified",
    Any = "any",
    Show = "show"
}

export enum YoutubeSearchListEventTypeEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}

export enum YoutubeSearchListOrderEnum {
    SearchSortUnspecified = "searchSortUnspecified",
    Date = "date",
    Rating = "rating",
    ViewCount = "viewCount",
    Relevance = "relevance",
    Title = "title",
    VideoCount = "videoCount"
}

export enum YoutubeSearchListSafeSearchEnum {
    SafeSearchSettingUnspecified = "safeSearchSettingUnspecified",
    None = "none",
    Moderate = "moderate",
    Strict = "strict"
}

export enum YoutubeSearchListVideoCaptionEnum {
    VideoCaptionUnspecified = "videoCaptionUnspecified",
    Any = "any",
    ClosedCaption = "closedCaption",
    None = "none"
}

export enum YoutubeSearchListVideoDefinitionEnum {
    Any = "any",
    Standard = "standard",
    High = "high"
}

export enum YoutubeSearchListVideoDimensionEnum {
    Any = "any",
    Twod = "2d",
    Threed = "3d"
}

export enum YoutubeSearchListVideoDurationEnum {
    VideoDurationUnspecified = "videoDurationUnspecified",
    Any = "any",
    Short = "short",
    Medium = "medium",
    Long = "long"
}

export enum YoutubeSearchListVideoEmbeddableEnum {
    VideoEmbeddableUnspecified = "videoEmbeddableUnspecified",
    Any = "any",
    True = "true"
}

export enum YoutubeSearchListVideoLicenseEnum {
    Any = "any",
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}

export enum YoutubeSearchListVideoSyndicatedEnum {
    VideoSyndicatedUnspecified = "videoSyndicatedUnspecified",
    Any = "any",
    True = "true"
}

export enum YoutubeSearchListVideoTypeEnum {
    VideoTypeUnspecified = "videoTypeUnspecified",
    Any = "any",
    Movie = "movie",
    Episode = "episode"
}


export class YoutubeSearchListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelType" })
  channelType?: YoutubeSearchListChannelTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventType" })
  eventType?: YoutubeSearchListEventTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forContentOwner" })
  forContentOwner?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forDeveloper" })
  forDeveloper?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forMine" })
  forMine?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationRadius" })
  locationRadius?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: YoutubeSearchListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publishedAfter" })
  publishedAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publishedBefore" })
  publishedBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relatedToVideoId" })
  relatedToVideoId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relevanceLanguage" })
  relevanceLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safeSearch" })
  safeSearch?: YoutubeSearchListSafeSearchEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topicId" })
  topicId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCaption" })
  videoCaption?: YoutubeSearchListVideoCaptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCategoryId" })
  videoCategoryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoDefinition" })
  videoDefinition?: YoutubeSearchListVideoDefinitionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoDimension" })
  videoDimension?: YoutubeSearchListVideoDimensionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoDuration" })
  videoDuration?: YoutubeSearchListVideoDurationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoEmbeddable" })
  videoEmbeddable?: YoutubeSearchListVideoEmbeddableEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoLicense" })
  videoLicense?: YoutubeSearchListVideoLicenseEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoSyndicated" })
  videoSyndicated?: YoutubeSearchListVideoSyndicatedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoType" })
  videoType?: YoutubeSearchListVideoTypeEnum;
}


export class YoutubeSearchListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeSearchListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: YoutubeSearchListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: YoutubeSearchListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: YoutubeSearchListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: YoutubeSearchListSecurityOption4;
}


export class YoutubeSearchListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeSearchListQueryParams;

  @SpeakeasyMetadata()
  security: YoutubeSearchListSecurity;
}


export class YoutubeSearchListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchListResponse?: shared.SearchListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
