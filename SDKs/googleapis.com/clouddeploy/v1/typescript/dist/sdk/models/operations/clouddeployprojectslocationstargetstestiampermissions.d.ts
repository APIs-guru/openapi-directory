import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsTestIamPermissionsPathParams;
    queryParams: ClouddeployProjectsLocationsTargetsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
