import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams;
    queryParams: BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity;
}
export declare class BigtableadminProjectsInstancesTablesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
