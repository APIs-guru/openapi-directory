import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeVideosListChartEnum {
    ChartUnspecified = "chartUnspecified",
    MostPopular = "mostPopular"
}
export declare enum YoutubeVideosListMyRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
export declare class YoutubeVideosListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    chart?: YoutubeVideosListChartEnum;
    fields?: string;
    hl?: string;
    id?: string[];
    key?: string;
    locale?: string;
    maxHeight?: number;
    maxResults?: number;
    maxWidth?: number;
    myRating?: YoutubeVideosListMyRatingEnum;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
    videoCategoryId?: string;
}
export declare class YoutubeVideosListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeVideosListSecurity extends SpeakeasyBase {
    option1?: YoutubeVideosListSecurityOption1;
    option2?: YoutubeVideosListSecurityOption2;
    option3?: YoutubeVideosListSecurityOption3;
    option4?: YoutubeVideosListSecurityOption4;
}
export declare class YoutubeVideosListRequest extends SpeakeasyBase {
    queryParams: YoutubeVideosListQueryParams;
    security: YoutubeVideosListSecurity;
}
export declare class YoutubeVideosListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: shared.VideoListResponse;
}
