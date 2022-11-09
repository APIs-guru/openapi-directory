import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerProjectsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1;
    option2?: CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2;
}
export declare class CloudresourcemanagerProjectsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsTestIamPermissionsPathParams;
    queryParams: CloudresourcemanagerProjectsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudresourcemanagerProjectsTestIamPermissionsSecurity;
}
export declare class CloudresourcemanagerProjectsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
