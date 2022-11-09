import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbillingBillingAccountsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsGetSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsGetSecurityOption1;
    option2?: CloudbillingBillingAccountsGetSecurityOption2;
    option3?: CloudbillingBillingAccountsGetSecurityOption3;
}
export declare class CloudbillingBillingAccountsGetRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsGetPathParams;
    queryParams: CloudbillingBillingAccountsGetQueryParams;
    security: CloudbillingBillingAccountsGetSecurity;
}
export declare class CloudbillingBillingAccountsGetResponse extends SpeakeasyBase {
    billingAccount?: shared.BillingAccount;
    contentType: string;
    statusCode: number;
}
