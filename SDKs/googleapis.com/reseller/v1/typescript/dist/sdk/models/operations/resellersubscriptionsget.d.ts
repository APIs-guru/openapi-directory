import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsGetPathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare class ResellerSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class ResellerSubscriptionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsGetSecurity extends SpeakeasyBase {
    option1?: ResellerSubscriptionsGetSecurityOption1;
    option2?: ResellerSubscriptionsGetSecurityOption2;
}
export declare class ResellerSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsGetPathParams;
    queryParams: ResellerSubscriptionsGetQueryParams;
    security: ResellerSubscriptionsGetSecurity;
}
export declare class ResellerSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
