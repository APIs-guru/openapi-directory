import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingbudgetsBillingAccountsBudgetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsGetQueryParams extends SpeakeasyBase {
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
export declare class BillingbudgetsBillingAccountsBudgetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsGetSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsGetRequest extends SpeakeasyBase {
    pathParams: BillingbudgetsBillingAccountsBudgetsGetPathParams;
    queryParams: BillingbudgetsBillingAccountsBudgetsGetQueryParams;
    security: BillingbudgetsBillingAccountsBudgetsGetSecurity;
}
export declare class BillingbudgetsBillingAccountsBudgetsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBillingBudgetsV1beta1Budget?: shared.GoogleCloudBillingBudgetsV1beta1Budget;
    statusCode: number;
}
