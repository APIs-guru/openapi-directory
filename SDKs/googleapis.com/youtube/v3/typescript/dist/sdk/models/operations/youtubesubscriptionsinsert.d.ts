import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeSubscriptionsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeSubscriptionsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeSubscriptionsInsertSecurityOption1;
    option2?: YoutubeSubscriptionsInsertSecurityOption2;
    option3?: YoutubeSubscriptionsInsertSecurityOption3;
}
export declare class YoutubeSubscriptionsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeSubscriptionsInsertQueryParams;
    request?: shared.Subscription;
    security: YoutubeSubscriptionsInsertSecurity;
}
export declare class YoutubeSubscriptionsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
