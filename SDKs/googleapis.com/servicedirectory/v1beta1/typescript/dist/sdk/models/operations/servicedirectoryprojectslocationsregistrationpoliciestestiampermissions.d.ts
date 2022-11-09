import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams;
    queryParams: ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity;
}
export declare class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
