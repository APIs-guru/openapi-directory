import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsGetPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsGetSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsGetSecurityOption1;
    option2?: PubsubProjectsSubscriptionsGetSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsGetPathParams;
    queryParams: PubsubProjectsSubscriptionsGetQueryParams;
    security: PubsubProjectsSubscriptionsGetSecurity;
}
export declare class PubsubProjectsSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
