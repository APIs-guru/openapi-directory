import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams extends SpeakeasyBase {
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
export declare class IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest extends SpeakeasyBase {
    pathParams: IamcredentialsProjectsServiceAccountsGenerateAccessTokenPathParams;
    queryParams: IamcredentialsProjectsServiceAccountsGenerateAccessTokenQueryParams;
    request?: shared.GenerateAccessTokenRequest;
    security: IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    generateAccessTokenResponse?: shared.GenerateAccessTokenResponse;
    statusCode: number;
}
