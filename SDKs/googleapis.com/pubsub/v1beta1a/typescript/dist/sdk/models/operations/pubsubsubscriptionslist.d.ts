import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubSubscriptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubSubscriptionsListSecurity extends SpeakeasyBase {
    option1?: PubsubSubscriptionsListSecurityOption1;
    option2?: PubsubSubscriptionsListSecurityOption2;
}
export declare class PubsubSubscriptionsListRequest extends SpeakeasyBase {
    queryParams: PubsubSubscriptionsListQueryParams;
    security: PubsubSubscriptionsListSecurity;
}
export declare class PubsubSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionsResponse?: shared.ListSubscriptionsResponse;
    statusCode: number;
}
