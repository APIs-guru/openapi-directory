import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatModeratorsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveChatModeratorsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatModeratorsInsertSecurityOption1;
    option2?: YoutubeLiveChatModeratorsInsertSecurityOption2;
}
export declare class YoutubeLiveChatModeratorsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatModeratorsInsertQueryParams;
    request?: shared.LiveChatModerator;
    security: YoutubeLiveChatModeratorsInsertSecurity;
}
export declare class YoutubeLiveChatModeratorsInsertResponse extends SpeakeasyBase {
    contentType: string;
    liveChatModerator?: shared.LiveChatModerator;
    statusCode: number;
}
