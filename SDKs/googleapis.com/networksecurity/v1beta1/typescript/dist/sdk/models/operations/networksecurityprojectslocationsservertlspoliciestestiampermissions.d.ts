import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams;
    queryParams: NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity;
}
export declare class NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
