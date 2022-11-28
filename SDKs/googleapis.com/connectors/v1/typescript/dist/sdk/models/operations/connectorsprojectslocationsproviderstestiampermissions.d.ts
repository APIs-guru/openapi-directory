import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ConnectorsProjectsLocationsProvidersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsProvidersTestIamPermissionsPathParams;
    queryParams: ConnectorsProjectsLocationsProvidersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity;
}
export declare class ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
