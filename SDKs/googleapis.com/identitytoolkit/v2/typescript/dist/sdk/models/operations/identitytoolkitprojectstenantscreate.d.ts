import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsCreateQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsCreateRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsCreatePathParams;
    queryParams: IdentitytoolkitProjectsTenantsCreateQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitAdminV2Tenant;
    security: IdentitytoolkitProjectsTenantsCreateSecurity;
}
export declare class IdentitytoolkitProjectsTenantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2Tenant?: shared.GoogleCloudIdentitytoolkitAdminV2Tenant;
    statusCode: number;
}
