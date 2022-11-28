import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatMessagesInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveChatMessagesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatMessagesInsertSecurityOption1;
    option2?: YoutubeLiveChatMessagesInsertSecurityOption2;
}
export declare class YoutubeLiveChatMessagesInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatMessagesInsertQueryParams;
    request?: shared.LiveChatMessage;
    security: YoutubeLiveChatMessagesInsertSecurity;
}
export declare class YoutubeLiveChatMessagesInsertResponse extends SpeakeasyBase {
    contentType: string;
    liveChatMessage?: shared.LiveChatMessage;
    statusCode: number;
}
