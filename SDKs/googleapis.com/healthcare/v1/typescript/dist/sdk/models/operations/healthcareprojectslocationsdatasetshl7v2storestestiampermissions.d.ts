import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
