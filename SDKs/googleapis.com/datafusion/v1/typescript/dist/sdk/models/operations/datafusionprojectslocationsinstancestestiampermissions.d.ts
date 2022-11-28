import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsInstancesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesTestIamPermissionsPathParams;
    queryParams: DatafusionProjectsLocationsInstancesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: DatafusionProjectsLocationsInstancesTestIamPermissionsSecurity;
}
export declare class DatafusionProjectsLocationsInstancesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
