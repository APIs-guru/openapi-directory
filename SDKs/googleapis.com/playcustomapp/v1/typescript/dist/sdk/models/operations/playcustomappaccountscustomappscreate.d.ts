import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PlaycustomappAccountsCustomAppsCreatePathParams extends SpeakeasyBase {
    account: string;
}
export declare class PlaycustomappAccountsCustomAppsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PlaycustomappAccountsCustomAppsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlaycustomappAccountsCustomAppsCreateRequest extends SpeakeasyBase {
    pathParams: PlaycustomappAccountsCustomAppsCreatePathParams;
    queryParams: PlaycustomappAccountsCustomAppsCreateQueryParams;
    request?: Uint8Array;
    security: PlaycustomappAccountsCustomAppsCreateSecurity;
}
export declare class PlaycustomappAccountsCustomAppsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customApp?: shared.CustomApp;
    statusCode: number;
}
