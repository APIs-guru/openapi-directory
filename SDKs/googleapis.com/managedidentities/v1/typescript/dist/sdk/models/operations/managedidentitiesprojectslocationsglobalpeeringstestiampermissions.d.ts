import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsPathParams;
    queryParams: ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity;
}
export declare class ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
