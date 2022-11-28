import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsActivatePathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsActivateQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsActivateRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsActivatePathParams;
    queryParams: ResellerSubscriptionsActivateQueryParams;
    security: ResellerSubscriptionsActivateSecurity;
}
export declare class ResellerSubscriptionsActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
