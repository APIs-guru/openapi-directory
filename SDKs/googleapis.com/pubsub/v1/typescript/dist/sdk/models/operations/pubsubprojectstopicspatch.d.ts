import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubProjectsTopicsPatchQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsPatchSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsPatchSecurityOption1;
    option2?: PubsubProjectsTopicsPatchSecurityOption2;
}
export declare class PubsubProjectsTopicsPatchRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsPatchPathParams;
    queryParams: PubsubProjectsTopicsPatchQueryParams;
    request?: shared.UpdateTopicRequest;
    security: PubsubProjectsTopicsPatchSecurity;
}
export declare class PubsubProjectsTopicsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
