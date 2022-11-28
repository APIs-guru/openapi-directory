import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsInsertPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class ResellerSubscriptionsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerAuthToken?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerSubscriptionsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsInsertRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsInsertPathParams;
    queryParams: ResellerSubscriptionsInsertQueryParams;
    request?: shared.Subscription;
    security: ResellerSubscriptionsInsertSecurity;
}
export declare class ResellerSubscriptionsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
