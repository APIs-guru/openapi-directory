import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PubsubProjectsTopicsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsTestIamPermissionsSecurityOption1;
    option2?: PubsubProjectsTopicsTestIamPermissionsSecurityOption2;
}
export declare class PubsubProjectsTopicsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsTestIamPermissionsPathParams;
    queryParams: PubsubProjectsTopicsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: PubsubProjectsTopicsTestIamPermissionsSecurity;
}
export declare class PubsubProjectsTopicsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
