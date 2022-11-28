import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsPullPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsPullQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsPullSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsPullSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsPullSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsPullSecurityOption1;
    option2?: PubsubProjectsSubscriptionsPullSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsPullRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsPullPathParams;
    queryParams: PubsubProjectsSubscriptionsPullQueryParams;
    request?: shared.PullRequest;
    security: PubsubProjectsSubscriptionsPullSecurity;
}
export declare class PubsubProjectsSubscriptionsPullResponse extends SpeakeasyBase {
    contentType: string;
    pullResponse?: shared.PullResponse;
    statusCode: number;
}
