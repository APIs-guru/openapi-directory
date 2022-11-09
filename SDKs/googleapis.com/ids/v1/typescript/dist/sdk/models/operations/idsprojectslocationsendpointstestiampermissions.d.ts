import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsEndpointsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class IdsProjectsLocationsEndpointsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsEndpointsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsEndpointsTestIamPermissionsPathParams;
    queryParams: IdsProjectsLocationsEndpointsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: IdsProjectsLocationsEndpointsTestIamPermissionsSecurity;
}
export declare class IdsProjectsLocationsEndpointsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
