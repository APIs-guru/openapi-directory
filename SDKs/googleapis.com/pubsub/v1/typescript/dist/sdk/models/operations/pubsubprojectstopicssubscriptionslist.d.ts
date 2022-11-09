import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsSubscriptionsListPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubProjectsTopicsSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsTopicsSubscriptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSubscriptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsSubscriptionsListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsSubscriptionsListSecurityOption1;
    option2?: PubsubProjectsTopicsSubscriptionsListSecurityOption2;
}
export declare class PubsubProjectsTopicsSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsSubscriptionsListPathParams;
    queryParams: PubsubProjectsTopicsSubscriptionsListQueryParams;
    security: PubsubProjectsTopicsSubscriptionsListSecurity;
}
export declare class PubsubProjectsTopicsSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listTopicSubscriptionsResponse?: shared.ListTopicSubscriptionsResponse;
    statusCode: number;
}
