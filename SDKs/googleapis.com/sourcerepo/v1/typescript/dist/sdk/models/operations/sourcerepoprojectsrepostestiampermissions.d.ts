import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SourcerepoProjectsReposTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposTestIamPermissionsSecurityOption1;
    option2?: SourcerepoProjectsReposTestIamPermissionsSecurityOption2;
    option3?: SourcerepoProjectsReposTestIamPermissionsSecurityOption3;
    option4?: SourcerepoProjectsReposTestIamPermissionsSecurityOption4;
}
export declare class SourcerepoProjectsReposTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposTestIamPermissionsPathParams;
    queryParams: SourcerepoProjectsReposTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: SourcerepoProjectsReposTestIamPermissionsSecurity;
}
export declare class SourcerepoProjectsReposTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
