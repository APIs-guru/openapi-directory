import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebmastersSitesAddPathParams extends SpeakeasyBase {
    siteUrl: string;
}
export declare class WebmastersSitesAddQueryParams extends SpeakeasyBase {
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
