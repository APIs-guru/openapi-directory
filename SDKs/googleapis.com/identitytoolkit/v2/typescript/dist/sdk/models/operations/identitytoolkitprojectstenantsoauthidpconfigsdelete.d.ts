import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams;
    queryParams: IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteQueryParams;
    security: IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteSecurity;
}
export declare class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
