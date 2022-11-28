import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeSuperChatEventsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeSuperChatEventsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSuperChatEventsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSuperChatEventsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSuperChatEventsListSecurity extends SpeakeasyBase {
    option1?: YoutubeSuperChatEventsListSecurityOption1;
    option2?: YoutubeSuperChatEventsListSecurityOption2;
    option3?: YoutubeSuperChatEventsListSecurityOption3;
}
export declare class YoutubeSuperChatEventsListRequest extends SpeakeasyBase {
    queryParams: YoutubeSuperChatEventsListQueryParams;
    security: YoutubeSuperChatEventsListSecurity;
}
export declare class YoutubeSuperChatEventsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    superChatEventListResponse?: shared.SuperChatEventListResponse;
}
