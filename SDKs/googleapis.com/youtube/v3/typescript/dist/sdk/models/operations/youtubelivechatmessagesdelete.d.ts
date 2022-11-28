import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatMessagesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveChatMessagesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatMessagesDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatMessagesDeleteSecurityOption1;
    option2?: YoutubeLiveChatMessagesDeleteSecurityOption2;
}
export declare class YoutubeLiveChatMessagesDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatMessagesDeleteQueryParams;
    security: YoutubeLiveChatMessagesDeleteSecurity;
}
export declare class YoutubeLiveChatMessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
