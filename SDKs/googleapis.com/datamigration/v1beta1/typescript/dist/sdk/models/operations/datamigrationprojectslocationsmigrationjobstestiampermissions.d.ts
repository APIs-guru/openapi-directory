import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams;
    queryParams: DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity;
}
export declare class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
