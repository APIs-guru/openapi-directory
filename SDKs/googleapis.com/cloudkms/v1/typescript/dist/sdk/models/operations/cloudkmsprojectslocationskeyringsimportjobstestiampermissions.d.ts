import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
