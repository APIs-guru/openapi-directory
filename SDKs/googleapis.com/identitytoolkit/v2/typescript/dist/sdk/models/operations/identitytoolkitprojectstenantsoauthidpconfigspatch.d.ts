import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams;
    queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2OAuthIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    statusCode: number;
}
