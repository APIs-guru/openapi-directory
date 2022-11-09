import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsModifyAckDeadlinePathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1;
    option2?: PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsModifyAckDeadlinePathParams;
    queryParams: PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams;
    request?: shared.ModifyAckDeadlineRequest;
    security: PubsubProjectsSubscriptionsModifyAckDeadlineSecurity;
}
export declare class PubsubProjectsSubscriptionsModifyAckDeadlineResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
