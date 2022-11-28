import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudtasksProjectsLocationsQueuesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTestIamPermissionsPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudtasksProjectsLocationsQueuesTestIamPermissionsSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
