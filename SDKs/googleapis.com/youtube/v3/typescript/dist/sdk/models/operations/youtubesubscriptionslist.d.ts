import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeSubscriptionsListOrderEnum {
    SubscriptionOrderUnspecified = "subscriptionOrderUnspecified",
    Relevance = "relevance",
    Unread = "unread",
    Alphabetical = "alphabetical"
}
export declare class YoutubeSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    forChannelId?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    mine?: boolean;
    myRecentSubscribers?: boolean;
    mySubscribers?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    order?: YoutubeSubscriptionsListOrderEnum;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeSubscriptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsListSecurity extends SpeakeasyBase {
    option1?: YoutubeSubscriptionsListSecurityOption1;
    option2?: YoutubeSubscriptionsListSecurityOption2;
    option3?: YoutubeSubscriptionsListSecurityOption3;
    option4?: YoutubeSubscriptionsListSecurityOption4;
}
export declare class YoutubeSubscriptionsListRequest extends SpeakeasyBase {
    queryParams: YoutubeSubscriptionsListQueryParams;
    security: YoutubeSubscriptionsListSecurity;
}
export declare class YoutubeSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionListResponse?: shared.SubscriptionListResponse;
}
