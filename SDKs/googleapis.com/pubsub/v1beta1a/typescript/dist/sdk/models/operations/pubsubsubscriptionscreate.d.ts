import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsCreateQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsCreateSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsCreateSecurityOption1;
    option2?: PubsubSubscriptionsCreateSecurityOption2;
}
export declare class PubsubSubscriptionsCreateRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsCreateQueryParams;
    request?: shared.Subscription;
    security: PubsubSubscriptionsCreateSecurity;
}
export declare class PubsubSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
