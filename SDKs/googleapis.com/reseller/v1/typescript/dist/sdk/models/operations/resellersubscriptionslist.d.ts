import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerAuthToken?: string;
    customerId?: string;
    customerNamePrefix?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerSubscriptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsListSecurity extends SpeakeasyBase {
    option1?: ResellerSubscriptionsListSecurityOption1;
    option2?: ResellerSubscriptionsListSecurityOption2;
}
export declare class ResellerSubscriptionsListRequest extends SpeakeasyBase {
    queryParams: ResellerSubscriptionsListQueryParams;
    security: ResellerSubscriptionsListSecurity;
}
export declare class ResellerSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptions?: shared.Subscriptions;
}
