import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams;
    queryParams: MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity;
}
export declare class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
