import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdentitytoolkitProjectsTenantsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdentitytoolkitProjectsTenantsListQueryParams extends SpeakeasyBase {
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
export declare class IdentitytoolkitProjectsTenantsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdentitytoolkitProjectsTenantsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsListSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsListSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsListRequest extends SpeakeasyBase {
    pathParams: IdentitytoolkitProjectsTenantsListPathParams;
    queryParams: IdentitytoolkitProjectsTenantsListQueryParams;
    security: IdentitytoolkitProjectsTenantsListSecurity;
}
export declare class IdentitytoolkitProjectsTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIdentitytoolkitAdminV2ListTenantsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse;
    statusCode: number;
}
