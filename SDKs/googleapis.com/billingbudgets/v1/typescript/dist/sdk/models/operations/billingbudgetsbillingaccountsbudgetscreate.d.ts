import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingbudgetsBillingAccountsBudgetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateQueryParams extends SpeakeasyBase {
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
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateRequest extends SpeakeasyBase {
    pathParams: BillingbudgetsBillingAccountsBudgetsCreatePathParams;
    queryParams: BillingbudgetsBillingAccountsBudgetsCreateQueryParams;
    request?: shared.GoogleCloudBillingBudgetsV1BudgetInput;
    security: BillingbudgetsBillingAccountsBudgetsCreateSecurity;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBillingBudgetsV1Budget?: shared.GoogleCloudBillingBudgetsV1Budget;
    statusCode: number;
}
