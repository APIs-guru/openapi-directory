import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class PubsubSubscriptionsAcknowledgeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsAcknowledgeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsAcknowledgeSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsAcknowledgeSecurityOption1;
    option2?: PubsubSubscriptionsAcknowledgeSecurityOption2;
}
export declare class PubsubSubscriptionsAcknowledgeRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsAcknowledgeQueryParams;
    request?: shared.AcknowledgeRequest;
    security: PubsubSubscriptionsAcknowledgeSecurity;
}
export declare class PubsubSubscriptionsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
