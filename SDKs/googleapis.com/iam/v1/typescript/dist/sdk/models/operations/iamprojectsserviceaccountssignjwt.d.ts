import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsSignJwtPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsSignJwtQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsSignJwtSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsSignJwtRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsSignJwtPathParams;
    queryParams: IamProjectsServiceAccountsSignJwtQueryParams;
    request?: shared.SignJwtRequest;
    security: IamProjectsServiceAccountsSignJwtSecurity;
}
export declare class IamProjectsServiceAccountsSignJwtResponse extends SpeakeasyBase {
    contentType: string;
    signJwtResponse?: shared.SignJwtResponse;
    statusCode: number;
}
