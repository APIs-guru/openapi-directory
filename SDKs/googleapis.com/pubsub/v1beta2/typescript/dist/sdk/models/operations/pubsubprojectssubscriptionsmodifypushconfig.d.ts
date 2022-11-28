import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsModifyPushConfigPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsModifyPushConfigQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsModifyPushConfigSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption1;
    option2?: PubsubProjectsSubscriptionsModifyPushConfigSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsModifyPushConfigRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsModifyPushConfigPathParams;
    queryParams: PubsubProjectsSubscriptionsModifyPushConfigQueryParams;
    request?: shared.ModifyPushConfigRequest;
    security: PubsubProjectsSubscriptionsModifyPushConfigSecurity;
}
export declare class PubsubProjectsSubscriptionsModifyPushConfigResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
