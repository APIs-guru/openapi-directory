import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeActivitiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    home?: boolean;
    key?: string;
    maxResults?: number;
    mine?: boolean;
    oauthToken?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    publishedAfter?: string;
    publishedBefore?: string;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeActivitiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeActivitiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeActivitiesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeActivitiesListSecurity extends SpeakeasyBase {
    option1?: YoutubeActivitiesListSecurityOption1;
    option2?: YoutubeActivitiesListSecurityOption2;
    option3?: YoutubeActivitiesListSecurityOption3;
}
export declare class YoutubeActivitiesListRequest extends SpeakeasyBase {
    queryParams: YoutubeActivitiesListQueryParams;
    security: YoutubeActivitiesListSecurity;
}
export declare class YoutubeActivitiesListResponse extends SpeakeasyBase {
    activityListResponse?: shared.ActivityListResponse;
    contentType: string;
    statusCode: number;
}
