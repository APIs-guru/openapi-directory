import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamcredentialsProjectsServiceAccountsSignJwtPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamcredentialsProjectsServiceAccountsSignJwtQueryParams extends SpeakeasyBase {
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
export declare class IamcredentialsProjectsServiceAccountsSignJwtSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamcredentialsProjectsServiceAccountsSignJwtRequest extends SpeakeasyBase {
    pathParams: IamcredentialsProjectsServiceAccountsSignJwtPathParams;
    queryParams: IamcredentialsProjectsServiceAccountsSignJwtQueryParams;
    request?: shared.SignJwtRequest;
    security: IamcredentialsProjectsServiceAccountsSignJwtSecurity;
}
export declare class IamcredentialsProjectsServiceAccountsSignJwtResponse extends SpeakeasyBase {
    contentType: string;
    signJwtResponse?: shared.SignJwtResponse;
    statusCode: number;
}
