import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsCredentialsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContentAccountsCredentialsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsCredentialsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsCredentialsCreateRequest extends SpeakeasyBase {
    pathParams: ContentAccountsCredentialsCreatePathParams;
    queryParams: ContentAccountsCredentialsCreateQueryParams;
    request?: shared.AccountCredentials;
    security: ContentAccountsCredentialsCreateSecurity;
}
export declare class ContentAccountsCredentialsCreateResponse extends SpeakeasyBase {
    accountCredentials?: shared.AccountCredentials;
    contentType: string;
    statusCode: number;
}
