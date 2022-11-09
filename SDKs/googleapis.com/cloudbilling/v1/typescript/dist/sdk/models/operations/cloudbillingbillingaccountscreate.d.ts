import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsCreateSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsCreateSecurityOption1;
    option2?: CloudbillingBillingAccountsCreateSecurityOption2;
}
export declare class CloudbillingBillingAccountsCreateRequest extends SpeakeasyBase {
    queryParams: CloudbillingBillingAccountsCreateQueryParams;
    request?: shared.BillingAccount;
    security: CloudbillingBillingAccountsCreateSecurity;
}
export declare class CloudbillingBillingAccountsCreateResponse extends SpeakeasyBase {
    billingAccount?: shared.BillingAccount;
    contentType: string;
    statusCode: number;
}
