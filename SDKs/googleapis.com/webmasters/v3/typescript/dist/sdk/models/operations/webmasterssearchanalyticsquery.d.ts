import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSearchanalyticsQueryPathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSearchanalyticsQueryQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class WebmastersSearchanalyticsQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSearchanalyticsQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSearchanalyticsQuerySecurity extends SpeakeasyBase {
    option1?: WebmastersSearchanalyticsQuerySecurityOption1;
    option2?: WebmastersSearchanalyticsQuerySecurityOption2;
}
export declare class WebmastersSearchanalyticsQueryRequest extends SpeakeasyBase {
    pathParams: WebmastersSearchanalyticsQueryPathParams;
    queryParams: WebmastersSearchanalyticsQueryQueryParams;
    request?: shared.SearchAnalyticsQueryRequest;
    security: WebmastersSearchanalyticsQuerySecurity;
}
export declare class WebmastersSearchanalyticsQueryResponse extends SpeakeasyBase {
    contentType: string;
    searchAnalyticsQueryResponse?: shared.SearchAnalyticsQueryResponse;
    statusCode: number;
}
