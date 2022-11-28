import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsPathParams;
    queryParams: NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity;
}
export declare class NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
