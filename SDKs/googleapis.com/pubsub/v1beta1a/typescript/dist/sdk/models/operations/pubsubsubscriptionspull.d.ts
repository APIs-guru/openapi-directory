import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsPullQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsPullSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsPullSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsPullSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsPullSecurityOption1;
    option2?: PubsubSubscriptionsPullSecurityOption2;
}
export declare class PubsubSubscriptionsPullRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsPullQueryParams;
    request?: shared.PullRequest;
    security: PubsubSubscriptionsPullSecurity;
}
export declare class PubsubSubscriptionsPullResponse extends SpeakeasyBase {
    contentType: string;
    pullResponse?: shared.PullResponse;
    statusCode: number;
}
