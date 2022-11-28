import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsEstimateCostScenarioPathParams extends SpeakeasyBase {
    billingAccount: string;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
    option2?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
    option3?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsEstimateCostScenarioPathParams;
    queryParams: CloudbillingBillingAccountsEstimateCostScenarioQueryParams;
    request?: shared.EstimateCostScenarioForBillingAccountRequest;
    security: CloudbillingBillingAccountsEstimateCostScenarioSecurity;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioResponse extends SpeakeasyBase {
    contentType: string;
    estimateCostScenarioForBillingAccountResponse?: shared.EstimateCostScenarioForBillingAccountResponse;
    statusCode: number;
}
