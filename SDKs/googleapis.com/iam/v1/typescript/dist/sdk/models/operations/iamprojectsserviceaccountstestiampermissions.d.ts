import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class IamProjectsServiceAccountsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class IamProjectsServiceAccountsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsTestIamPermissionsPathParams;
    queryParams: IamProjectsServiceAccountsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: IamProjectsServiceAccountsTestIamPermissionsSecurity;
}
export declare class IamProjectsServiceAccountsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
