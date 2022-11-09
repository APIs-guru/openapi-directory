import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
