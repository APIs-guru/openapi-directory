import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbillingBillingAccountsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbillingBillingAccountsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsPatchSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsPatchSecurityOption1;
    option2?: CloudbillingBillingAccountsPatchSecurityOption2;
}
export declare class CloudbillingBillingAccountsPatchRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsPatchPathParams;
    queryParams: CloudbillingBillingAccountsPatchQueryParams;
    request?: shared.BillingAccountInput;
    security: CloudbillingBillingAccountsPatchSecurity;
}
export declare class CloudbillingBillingAccountsPatchResponse extends SpeakeasyBase {
    billingAccount?: shared.BillingAccount;
    contentType: string;
    statusCode: number;
}
