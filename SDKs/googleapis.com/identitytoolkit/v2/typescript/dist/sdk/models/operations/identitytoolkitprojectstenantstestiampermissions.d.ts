import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams;
    queryParams: IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity;
}
export declare class IdentitytoolkitProjectsTenantsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
