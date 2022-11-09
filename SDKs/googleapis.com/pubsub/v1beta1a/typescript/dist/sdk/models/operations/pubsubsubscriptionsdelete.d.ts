import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsDeletePathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubSubscriptionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsDeleteSecurityOption1;
    option2?: PubsubSubscriptionsDeleteSecurityOption2;
}
export declare class PubsubSubscriptionsDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubSubscriptionsDeletePathParams;
    queryParams: PubsubSubscriptionsDeleteQueryParams;
    security: PubsubSubscriptionsDeleteSecurity;
}
export declare class PubsubSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
