import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeLiveBroadcastsListBroadcastStatusEnum {
    BroadcastStatusFilterUnspecified = "broadcastStatusFilterUnspecified",
    All = "all",
    Active = "active",
    Upcoming = "upcoming",
    Completed = "completed"
}
export declare enum YoutubeLiveBroadcastsListBroadcastTypeEnum {
    BroadcastTypeFilterUnspecified = "broadcastTypeFilterUnspecified",
    All = "all",
    Event = "event",
    Persistent = "persistent"
}
export declare class YoutubeLiveBroadcastsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    broadcastStatus?: YoutubeLiveBroadcastsListBroadcastStatusEnum;
    broadcastType?: YoutubeLiveBroadcastsListBroadcastTypeEnum;
    callback?: string;
    fields?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    mine?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsListSecurityOption1;
    option2?: YoutubeLiveBroadcastsListSecurityOption2;
    option3?: YoutubeLiveBroadcastsListSecurityOption3;
}
export declare class YoutubeLiveBroadcastsListRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsListQueryParams;
    security: YoutubeLiveBroadcastsListSecurity;
}
export declare class YoutubeLiveBroadcastsListResponse extends SpeakeasyBase {
    contentType: string;
    liveBroadcastListResponse?: shared.LiveBroadcastListResponse;
    statusCode: number;
}
