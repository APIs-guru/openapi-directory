import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams;
    queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams;
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2OAuthIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    statusCode: number;
}
