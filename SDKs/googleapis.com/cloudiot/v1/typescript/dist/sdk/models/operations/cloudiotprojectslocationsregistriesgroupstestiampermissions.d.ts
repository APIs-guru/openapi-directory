import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
