import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingbudgetsBillingAccountsBudgetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsListSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsListSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsListSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsListRequest extends SpeakeasyBase {
    pathParams: BillingbudgetsBillingAccountsBudgetsListPathParams;
    queryParams: BillingbudgetsBillingAccountsBudgetsListQueryParams;
    security: BillingbudgetsBillingAccountsBudgetsListSecurity;
}
export declare class BillingbudgetsBillingAccountsBudgetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBillingBudgetsV1ListBudgetsResponse?: shared.GoogleCloudBillingBudgetsV1ListBudgetsResponse;
    statusCode: number;
}
