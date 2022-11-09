import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams;
    queryParams: DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
