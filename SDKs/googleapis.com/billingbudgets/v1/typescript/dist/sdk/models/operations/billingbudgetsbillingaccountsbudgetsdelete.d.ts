import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingbudgetsBillingAccountsBudgetsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BillingbudgetsBillingAccountsBudgetsDeleteSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsDeleteRequest extends SpeakeasyBase {
    pathParams: BillingbudgetsBillingAccountsBudgetsDeletePathParams;
    queryParams: BillingbudgetsBillingAccountsBudgetsDeleteQueryParams;
    security: BillingbudgetsBillingAccountsBudgetsDeleteSecurity;
}
export declare class BillingbudgetsBillingAccountsBudgetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
