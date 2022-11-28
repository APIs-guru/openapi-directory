import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitesDeletePathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSitesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class WebmastersSitesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesDeleteRequest extends SpeakeasyBase {
    pathParams: WebmastersSitesDeletePathParams;
    queryParams: WebmastersSitesDeleteQueryParams;
    security: WebmastersSitesDeleteSecurity;
}
export declare class WebmastersSitesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
