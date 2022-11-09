import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    idpId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams;
    queryParams: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams;
    request?: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
    security: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
    statusCode: number;
}
