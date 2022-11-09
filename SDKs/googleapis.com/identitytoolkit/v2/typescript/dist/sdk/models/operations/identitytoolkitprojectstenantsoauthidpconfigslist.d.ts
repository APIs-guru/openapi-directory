import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsListPathParams;
    queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsListQueryParams;
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsListSecurity;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;
    statusCode: number;
}
