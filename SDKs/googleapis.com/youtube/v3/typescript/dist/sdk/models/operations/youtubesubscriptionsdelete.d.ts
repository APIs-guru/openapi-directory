import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeSubscriptionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeSubscriptionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeSubscriptionsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeSubscriptionsDeleteSecurityOption1;
    option2?: YoutubeSubscriptionsDeleteSecurityOption2;
    option3?: YoutubeSubscriptionsDeleteSecurityOption3;
}
export declare class YoutubeSubscriptionsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeSubscriptionsDeleteQueryParams;
    security: YoutubeSubscriptionsDeleteSecurity;
}
export declare class YoutubeSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
