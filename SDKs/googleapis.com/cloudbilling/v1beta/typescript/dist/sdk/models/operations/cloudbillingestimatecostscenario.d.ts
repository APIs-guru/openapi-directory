import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbillingEstimateCostScenarioQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingEstimateCostScenarioSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingEstimateCostScenarioSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingEstimateCostScenarioSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingEstimateCostScenarioSecurity extends SpeakeasyBase {
    option1?: CloudbillingEstimateCostScenarioSecurityOption1;
    option2?: CloudbillingEstimateCostScenarioSecurityOption2;
    option3?: CloudbillingEstimateCostScenarioSecurityOption3;
}
export declare class CloudbillingEstimateCostScenarioRequest extends SpeakeasyBase {
    queryParams: CloudbillingEstimateCostScenarioQueryParams;
    request?: shared.EstimateCostScenarioWithListPriceRequest;
    security: CloudbillingEstimateCostScenarioSecurity;
}
export declare class CloudbillingEstimateCostScenarioResponse extends SpeakeasyBase {
    contentType: string;
    estimateCostScenarioWithListPriceResponse?: shared.EstimateCostScenarioWithListPriceResponse;
    statusCode: number;
}
