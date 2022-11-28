import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsDetachPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsDetachQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsDetachSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsDetachSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsDetachSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsDetachSecurityOption1;
    option2?: PubsubProjectsSubscriptionsDetachSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsDetachRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsDetachPathParams;
    queryParams: PubsubProjectsSubscriptionsDetachQueryParams;
    security: PubsubProjectsSubscriptionsDetachSecurity;
}
export declare class PubsubProjectsSubscriptionsDetachResponse extends SpeakeasyBase {
    contentType: string;
    detachSubscriptionResponse?: Map<string, any>;
    statusCode: number;
}
