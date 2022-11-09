import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class PubsubProjectsSubscriptionsListQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSubscriptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsListSecurityOption1;
    option2?: PubsubProjectsSubscriptionsListSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsListPathParams;
    queryParams: PubsubProjectsSubscriptionsListQueryParams;
    security: PubsubProjectsSubscriptionsListSecurity;
}
export declare class PubsubProjectsSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionsResponse?: shared.ListSubscriptionsResponse;
    statusCode: number;
}
