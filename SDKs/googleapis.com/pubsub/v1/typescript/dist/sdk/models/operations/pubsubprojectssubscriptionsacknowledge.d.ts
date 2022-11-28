import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsAcknowledgePathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsAcknowledgeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsAcknowledgeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsAcknowledgeSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsAcknowledgeSecurityOption1;
    option2?: PubsubProjectsSubscriptionsAcknowledgeSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsAcknowledgeRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsAcknowledgePathParams;
    queryParams: PubsubProjectsSubscriptionsAcknowledgeQueryParams;
    request?: shared.AcknowledgeRequest;
    security: PubsubProjectsSubscriptionsAcknowledgeSecurity;
}
export declare class PubsubProjectsSubscriptionsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
