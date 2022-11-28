import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsGetPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsGetSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsGetSecurityOption1;
    option2?: PubsubSubscriptionsGetSecurityOption2;
}
export declare class PubsubSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: PubsubSubscriptionsGetPathParams;
    queryParams: PubsubSubscriptionsGetQueryParams;
    security: PubsubSubscriptionsGetSecurity;
}
export declare class PubsubSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
