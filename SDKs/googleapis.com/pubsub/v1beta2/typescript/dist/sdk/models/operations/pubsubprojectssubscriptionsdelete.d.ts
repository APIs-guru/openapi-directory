import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsDeletePathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsDeleteSecurityOption1;
    option2?: PubsubProjectsSubscriptionsDeleteSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsDeletePathParams;
    queryParams: PubsubProjectsSubscriptionsDeleteQueryParams;
    security: PubsubProjectsSubscriptionsDeleteSecurity;
}
export declare class PubsubProjectsSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
