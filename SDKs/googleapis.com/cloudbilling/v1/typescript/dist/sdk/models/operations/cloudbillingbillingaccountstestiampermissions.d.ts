import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption1;
    option2?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption2;
    option3?: CloudbillingBillingAccountsTestIamPermissionsSecurityOption3;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsTestIamPermissionsPathParams;
    queryParams: CloudbillingBillingAccountsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudbillingBillingAccountsTestIamPermissionsSecurity;
}
export declare class CloudbillingBillingAccountsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
