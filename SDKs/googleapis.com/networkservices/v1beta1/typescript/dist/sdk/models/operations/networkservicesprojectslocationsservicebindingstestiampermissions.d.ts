import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsPathParams;
    queryParams: NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
