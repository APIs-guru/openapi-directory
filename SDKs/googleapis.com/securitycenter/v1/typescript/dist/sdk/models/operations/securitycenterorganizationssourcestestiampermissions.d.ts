import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams;
    queryParams: SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;
}
export declare class SecuritycenterOrganizationsSourcesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
