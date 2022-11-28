import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatModeratorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    liveChatId: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveChatModeratorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatModeratorsListSecurityOption1;
    option2?: YoutubeLiveChatModeratorsListSecurityOption2;
    option3?: YoutubeLiveChatModeratorsListSecurityOption3;
}
export declare class YoutubeLiveChatModeratorsListRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatModeratorsListQueryParams;
    security: YoutubeLiveChatModeratorsListSecurity;
}
export declare class YoutubeLiveChatModeratorsListResponse extends SpeakeasyBase {
    contentType: string;
    liveChatModeratorListResponse?: shared.LiveChatModeratorListResponse;
    statusCode: number;
}
