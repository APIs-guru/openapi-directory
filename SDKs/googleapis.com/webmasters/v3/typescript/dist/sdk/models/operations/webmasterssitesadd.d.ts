import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitesAddPathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSitesAddQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class WebmastersSitesAddSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesAddRequest extends SpeakeasyBase {
    pathParams: WebmastersSitesAddPathParams;
    queryParams: WebmastersSitesAddQueryParams;
    security: WebmastersSitesAddSecurity;
}
export declare class WebmastersSitesAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
