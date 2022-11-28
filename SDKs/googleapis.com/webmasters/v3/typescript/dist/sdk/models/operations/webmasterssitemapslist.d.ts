import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitemapsListPathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSitemapsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sitemapIndex?: string;
    userIp?: string;
}
export declare class WebmastersSitemapsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitemapsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitemapsListSecurity extends SpeakeasyBase {
    option1?: WebmastersSitemapsListSecurityOption1;
    option2?: WebmastersSitemapsListSecurityOption2;
}
export declare class WebmastersSitemapsListRequest extends SpeakeasyBase {
    pathParams: WebmastersSitemapsListPathParams;
    queryParams: WebmastersSitemapsListQueryParams;
    security: WebmastersSitemapsListSecurity;
}
export declare class WebmastersSitemapsListResponse extends SpeakeasyBase {
    contentType: string;
    sitemapsListResponse?: shared.SitemapsListResponse;
    statusCode: number;
}
