import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebmastersSitesListQueryParams extends SpeakeasyBase {
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
export declare class WebmastersSitesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitesListSecurity extends SpeakeasyBase {
    option1?: WebmastersSitesListSecurityOption1;
    option2?: WebmastersSitesListSecurityOption2;
}
export declare class WebmastersSitesListRequest extends SpeakeasyBase {
    queryParams: WebmastersSitesListQueryParams;
    security: WebmastersSitesListSecurity;
}
export declare class WebmastersSitesListResponse extends SpeakeasyBase {
    contentType: string;
    sitesListResponse?: shared.SitesListResponse;
    statusCode: number;
}
