import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsModifyAckDeadlineQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsModifyAckDeadlineSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsModifyAckDeadlineSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsModifyAckDeadlineSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsModifyAckDeadlineSecurityOption1;
    option2?: PubsubSubscriptionsModifyAckDeadlineSecurityOption2;
}
export declare class PubsubSubscriptionsModifyAckDeadlineRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsModifyAckDeadlineQueryParams;
    request?: shared.ModifyAckDeadlineRequest;
    security: PubsubSubscriptionsModifyAckDeadlineSecurity;
}
export declare class PubsubSubscriptionsModifyAckDeadlineResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
