import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthIdpConfigId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams;
    queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2OAuthIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    statusCode: number;
}
