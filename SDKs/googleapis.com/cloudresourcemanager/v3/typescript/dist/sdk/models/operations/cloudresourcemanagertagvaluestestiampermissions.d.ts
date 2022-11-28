import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerTagValuesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1;
    option2?: CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption2;
}
export declare class CloudresourcemanagerTagValuesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesTestIamPermissionsPathParams;
    queryParams: CloudresourcemanagerTagValuesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudresourcemanagerTagValuesTestIamPermissionsSecurity;
}
export declare class CloudresourcemanagerTagValuesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
