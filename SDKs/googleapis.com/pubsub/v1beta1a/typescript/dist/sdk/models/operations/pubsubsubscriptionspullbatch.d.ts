import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsPullBatchQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsPullBatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsPullBatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsPullBatchSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsPullBatchSecurityOption1;
    option2?: PubsubSubscriptionsPullBatchSecurityOption2;
}
export declare class PubsubSubscriptionsPullBatchRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsPullBatchQueryParams;
    request?: shared.PullBatchRequest;
    security: PubsubSubscriptionsPullBatchSecurity;
}
export declare class PubsubSubscriptionsPullBatchResponse extends SpeakeasyBase {
    contentType: string;
    pullBatchResponse?: shared.PullBatchResponse;
    statusCode: number;
}
