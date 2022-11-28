import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsChangeSeatsPathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsChangeSeatsQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsChangeSeatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsChangeSeatsRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsChangeSeatsPathParams;
    queryParams: ResellerSubscriptionsChangeSeatsQueryParams;
    request?: shared.Seats;
    security: ResellerSubscriptionsChangeSeatsSecurity;
}
export declare class ResellerSubscriptionsChangeSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
