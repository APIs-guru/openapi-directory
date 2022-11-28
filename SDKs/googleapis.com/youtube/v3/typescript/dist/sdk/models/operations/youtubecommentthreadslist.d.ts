import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeCommentThreadsListModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}
export declare enum YoutubeCommentThreadsListOrderEnum {
    OrderUnspecified = "orderUnspecified",
    Time = "time",
    Relevance = "relevance"
}
export declare enum YoutubeCommentThreadsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified",
    Html = "html",
    PlainText = "plainText"
}
export declare class YoutubeCommentThreadsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allThreadsRelatedToChannelId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    moderationStatus?: YoutubeCommentThreadsListModerationStatusEnum;
    oauthToken?: string;
    order?: YoutubeCommentThreadsListOrderEnum;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    searchTerms?: string;
    textFormat?: YoutubeCommentThreadsListTextFormatEnum;
    uploadType?: string;
    uploadProtocol?: string;
    videoId?: string;
}
export declare class YoutubeCommentThreadsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentThreadsListRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentThreadsListQueryParams;
    security: YoutubeCommentThreadsListSecurity;
}
export declare class YoutubeCommentThreadsListResponse extends SpeakeasyBase {
    commentThreadListResponse?: shared.CommentThreadListResponse;
    contentType: string;
    statusCode: number;
}
