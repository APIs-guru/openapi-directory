import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsChangePlanPathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsChangePlanQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsChangePlanSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsChangePlanRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsChangePlanPathParams;
    queryParams: ResellerSubscriptionsChangePlanQueryParams;
    request?: shared.ChangePlanRequest;
    security: ResellerSubscriptionsChangePlanSecurity;
}
export declare class ResellerSubscriptionsChangePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
