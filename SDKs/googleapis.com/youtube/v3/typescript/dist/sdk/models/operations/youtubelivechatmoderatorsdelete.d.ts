import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveChatModeratorsDeleteQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveChatModeratorsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveChatModeratorsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatModeratorsDeleteSecurityOption1;
    option2?: YoutubeLiveChatModeratorsDeleteSecurityOption2;
}
export declare class YoutubeLiveChatModeratorsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveChatModeratorsDeleteQueryParams;
    security: YoutubeLiveChatModeratorsDeleteSecurity;
}
export declare class YoutubeLiveChatModeratorsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
