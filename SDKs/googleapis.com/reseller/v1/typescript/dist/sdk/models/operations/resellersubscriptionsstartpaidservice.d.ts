import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsStartPaidServicePathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsStartPaidServiceQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsStartPaidServiceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsStartPaidServiceRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsStartPaidServicePathParams;
    queryParams: ResellerSubscriptionsStartPaidServiceQueryParams;
    security: ResellerSubscriptionsStartPaidServiceSecurity;
}
export declare class ResellerSubscriptionsStartPaidServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
