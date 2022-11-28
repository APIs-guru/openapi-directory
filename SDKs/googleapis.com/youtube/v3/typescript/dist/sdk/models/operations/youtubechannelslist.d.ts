import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    categoryId?: string;
    fields?: string;
    forUsername?: string;
    hl?: string;
    id?: string[];
    key?: string;
    managedByMe?: boolean;
    maxResults?: number;
    mine?: boolean;
    mySubscribers?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeChannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsListSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelsListSecurityOption1;
    option2?: YoutubeChannelsListSecurityOption2;
    option3?: YoutubeChannelsListSecurityOption3;
    option4?: YoutubeChannelsListSecurityOption4;
    option5?: YoutubeChannelsListSecurityOption5;
}
export declare class YoutubeChannelsListRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelsListQueryParams;
    security: YoutubeChannelsListSecurity;
}
export declare class YoutubeChannelsListResponse extends SpeakeasyBase {
    channelListResponse?: shared.ChannelListResponse;
    contentType: string;
    statusCode: number;
}
