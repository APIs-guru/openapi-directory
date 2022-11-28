import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitesGetPathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSitesGetQueryParams extends SpeakeasyBase {
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
export declare class WebmastersSitesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesGetSecurity extends SpeakeasyBase {
    option1?: WebmastersSitesGetSecurityOption1;
    option2?: WebmastersSitesGetSecurityOption2;
}
export declare class WebmastersSitesGetRequest extends SpeakeasyBase {
    pathParams: WebmastersSitesGetPathParams;
    queryParams: WebmastersSitesGetQueryParams;
    security: WebmastersSitesGetSecurity;
}
export declare class WebmastersSitesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wmxSite?: shared.WmxSite;
}
