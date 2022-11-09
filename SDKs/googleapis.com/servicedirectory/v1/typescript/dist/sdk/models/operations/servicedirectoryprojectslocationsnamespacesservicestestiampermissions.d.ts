import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
