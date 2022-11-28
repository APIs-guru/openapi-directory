import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams;
    queryParams: SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity;
}
export declare class SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
