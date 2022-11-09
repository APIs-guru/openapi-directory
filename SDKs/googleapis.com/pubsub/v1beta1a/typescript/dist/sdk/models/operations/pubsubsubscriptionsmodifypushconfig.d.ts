import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsModifyPushConfigQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsModifyPushConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsModifyPushConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsModifyPushConfigSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsModifyPushConfigSecurityOption1;
    option2?: PubsubSubscriptionsModifyPushConfigSecurityOption2;
}
export declare class PubsubSubscriptionsModifyPushConfigRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsModifyPushConfigQueryParams;
    request?: shared.ModifyPushConfigRequest;
    security: PubsubSubscriptionsModifyPushConfigSecurity;
}
export declare class PubsubSubscriptionsModifyPushConfigResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
