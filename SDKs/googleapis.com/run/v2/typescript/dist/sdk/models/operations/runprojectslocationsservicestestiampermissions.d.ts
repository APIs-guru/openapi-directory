import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class RunProjectsLocationsServicesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsServicesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesTestIamPermissionsPathParams;
    queryParams: RunProjectsLocationsServicesTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: RunProjectsLocationsServicesTestIamPermissionsSecurity;
}
export declare class RunProjectsLocationsServicesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
