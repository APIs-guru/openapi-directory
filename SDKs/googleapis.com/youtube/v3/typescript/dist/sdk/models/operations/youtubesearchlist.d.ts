import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeSearchListChannelTypeEnum {
    ChannelTypeUnspecified = "channelTypeUnspecified",
    Any = "any",
    Show = "show"
}
export declare enum YoutubeSearchListEventTypeEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
export declare enum YoutubeSearchListOrderEnum {
    SearchSortUnspecified = "searchSortUnspecified",
    Date = "date",
    Rating = "rating",
    ViewCount = "viewCount",
    Relevance = "relevance",
    Title = "title",
    VideoCount = "videoCount"
}
export declare enum YoutubeSearchListSafeSearchEnum {
    SafeSearchSettingUnspecified = "safeSearchSettingUnspecified",
    None = "none",
    Moderate = "moderate",
    Strict = "strict"
}
export declare enum YoutubeSearchListVideoCaptionEnum {
    VideoCaptionUnspecified = "videoCaptionUnspecified",
    Any = "any",
    ClosedCaption = "closedCaption",
    None = "none"
}
export declare enum YoutubeSearchListVideoDefinitionEnum {
    Any = "any",
    Standard = "standard",
    High = "high"
}
export declare enum YoutubeSearchListVideoDimensionEnum {
    Any = "any",
    Twod = "2d",
    Threed = "3d"
}
export declare enum YoutubeSearchListVideoDurationEnum {
    VideoDurationUnspecified = "videoDurationUnspecified",
    Any = "any",
    Short = "short",
    Medium = "medium",
    Long = "long"
}
export declare enum YoutubeSearchListVideoEmbeddableEnum {
    VideoEmbeddableUnspecified = "videoEmbeddableUnspecified",
    Any = "any",
    True = "true"
}
export declare enum YoutubeSearchListVideoLicenseEnum {
    Any = "any",
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}
export declare enum YoutubeSearchListVideoSyndicatedEnum {
    VideoSyndicatedUnspecified = "videoSyndicatedUnspecified",
    Any = "any",
    True = "true"
}
export declare enum YoutubeSearchListVideoTypeEnum {
    VideoTypeUnspecified = "videoTypeUnspecified",
    Any = "any",
    Movie = "movie",
    Episode = "episode"
}
export declare class YoutubeSearchListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    channelType?: YoutubeSearchListChannelTypeEnum;
    eventType?: YoutubeSearchListEventTypeEnum;
    fields?: string;
    forContentOwner?: boolean;
    forDeveloper?: boolean;
    forMine?: boolean;
    key?: string;
    location?: string;
    locationRadius?: string;
    maxResults?: number;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    order?: YoutubeSearchListOrderEnum;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    publishedAfter?: string;
    publishedBefore?: string;
    q?: string;
    quotaUser?: string;
    regionCode?: string;
    relatedToVideoId?: string;
    relevanceLanguage?: string;
    safeSearch?: YoutubeSearchListSafeSearchEnum;
    topicId?: string;
    type?: string[];
    uploadType?: string;
    uploadProtocol?: string;
    videoCaption?: YoutubeSearchListVideoCaptionEnum;
    videoCategoryId?: string;
    videoDefinition?: YoutubeSearchListVideoDefinitionEnum;
    videoDimension?: YoutubeSearchListVideoDimensionEnum;
    videoDuration?: YoutubeSearchListVideoDurationEnum;
    videoEmbeddable?: YoutubeSearchListVideoEmbeddableEnum;
    videoLicense?: YoutubeSearchListVideoLicenseEnum;
    videoSyndicated?: YoutubeSearchListVideoSyndicatedEnum;
    videoType?: YoutubeSearchListVideoTypeEnum;
}
export declare class YoutubeSearchListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSearchListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSearchListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSearchListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSearchListSecurity extends SpeakeasyBase {
    option1?: YoutubeSearchListSecurityOption1;
    option2?: YoutubeSearchListSecurityOption2;
    option3?: YoutubeSearchListSecurityOption3;
    option4?: YoutubeSearchListSecurityOption4;
}
export declare class YoutubeSearchListRequest extends SpeakeasyBase {
    queryParams: YoutubeSearchListQueryParams;
    security: YoutubeSearchListSecurity;
}
export declare class YoutubeSearchListResponse extends SpeakeasyBase {
    contentType: string;
    searchListResponse?: shared.SearchListResponse;
    statusCode: number;
}
