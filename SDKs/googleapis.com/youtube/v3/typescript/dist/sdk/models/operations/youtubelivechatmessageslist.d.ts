import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatMessagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl?: string;
    key?: string;
    liveChatId: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    part: string[];
    prettyPrint?: boolean;
    profileImageSize?: number;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveChatMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatMessagesListSecurityOption1;
    option2?: YoutubeLiveChatMessagesListSecurityOption2;
    option3?: YoutubeLiveChatMessagesListSecurityOption3;
}
export declare class YoutubeLiveChatMessagesListRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatMessagesListQueryParams;
    security: YoutubeLiveChatMessagesListSecurity;
}
export declare class YoutubeLiveChatMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    liveChatMessageListResponse?: shared.LiveChatMessageListResponse;
    statusCode: number;
}
