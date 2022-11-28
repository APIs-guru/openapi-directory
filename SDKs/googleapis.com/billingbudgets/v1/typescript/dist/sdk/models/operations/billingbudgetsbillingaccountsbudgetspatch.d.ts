import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingbudgetsBillingAccountsBudgetsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsPatchQueryParams extends SpeakeasyBase {
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
export declare class BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsPatchSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsPatchRequest extends SpeakeasyBase {
    pathParams: BillingbudgetsBillingAccountsBudgetsPatchPathParams;
    queryParams: BillingbudgetsBillingAccountsBudgetsPatchQueryParams;
    request?: shared.GoogleCloudBillingBudgetsV1BudgetInput;
    security: BillingbudgetsBillingAccountsBudgetsPatchSecurity;
}
export declare class BillingbudgetsBillingAccountsBudgetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBillingBudgetsV1Budget?: shared.GoogleCloudBillingBudgetsV1Budget;
    statusCode: number;
}
