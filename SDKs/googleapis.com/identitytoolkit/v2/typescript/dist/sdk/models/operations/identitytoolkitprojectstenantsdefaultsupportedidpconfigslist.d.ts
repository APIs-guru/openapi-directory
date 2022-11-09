import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams;
    queryParams: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListQueryParams;
    security: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListSecurity;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;
    statusCode: number;
}
