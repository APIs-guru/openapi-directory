import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateIdTokenQueryParams extends SpeakeasyBase {
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
export declare class IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest extends SpeakeasyBase {
    pathParams: IamcredentialsProjectsServiceAccountsGenerateIdTokenPathParams;
    queryParams: IamcredentialsProjectsServiceAccountsGenerateIdTokenQueryParams;
    request?: shared.GenerateIdTokenRequest;
    security: IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity;
}
export declare class IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse extends SpeakeasyBase {
    contentType: string;
    generateIdTokenResponse?: shared.GenerateIdTokenResponse;
    statusCode: number;
}
