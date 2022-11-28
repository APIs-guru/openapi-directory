import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsWaitersTestIamPermissionsPathParams;
    queryParams: RuntimeconfigProjectsConfigsWaitersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity;
}
export declare class RuntimeconfigProjectsConfigsWaitersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
