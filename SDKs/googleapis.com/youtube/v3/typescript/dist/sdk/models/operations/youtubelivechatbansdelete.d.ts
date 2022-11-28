import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatBansDeleteQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveChatBansDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatBansDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatBansDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatBansDeleteSecurityOption1;
    option2?: YoutubeLiveChatBansDeleteSecurityOption2;
}
export declare class YoutubeLiveChatBansDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatBansDeleteQueryParams;
    security: YoutubeLiveChatBansDeleteSecurity;
}
export declare class YoutubeLiveChatBansDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
