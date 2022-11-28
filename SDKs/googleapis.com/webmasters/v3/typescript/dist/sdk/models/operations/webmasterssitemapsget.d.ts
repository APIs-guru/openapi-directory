import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitemapsGetPathParams extends SpeakeasyBase {
    feedpath: string;
    siteUrl: string;
}
export declare class WebmastersSitemapsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class WebmastersSitemapsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitemapsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitemapsGetSecurity extends SpeakeasyBase {
    option1?: WebmastersSitemapsGetSecurityOption1;
    option2?: WebmastersSitemapsGetSecurityOption2;
}
export declare class WebmastersSitemapsGetRequest extends SpeakeasyBase {
    pathParams: WebmastersSitemapsGetPathParams;
    queryParams: WebmastersSitemapsGetQueryParams;
    security: WebmastersSitemapsGetSecurity;
}
export declare class WebmastersSitemapsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wmxSitemap?: shared.WmxSitemap;
}
